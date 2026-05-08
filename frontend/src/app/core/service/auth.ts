import { environment } from '../../../environment/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { catchError, map, of, tap } from 'rxjs';
import { userModel } from '../repository/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.apiUrl;
  private readonly http = inject(HttpClient);

  isLoggedIn = signal(false);
  isUserLoaded = signal(false);
  currentUser = signal<userModel | null>(null);
  currentUserRole = signal<string | null>(null);
  token = signal<string | null>(localStorage.getItem('token'));

  // -----------------------------------------------
  // 🔐 Utility: Set / Clear token
  // -----------------------------------------------
  private setToken(token: string) {
    localStorage.setItem('token', token);
    this.token.set(token);
  }

  private clearToken() {
    localStorage.removeItem('token');
    this.token.set(null);
  }

  private getAuthHeader() {
    const t = this.token();
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${t}`,
      }),
    };
  }

  // -----------------------------------------------
  // 📝 Sign Up
  // -----------------------------------------------
  signUp(data: any) {
    return this.http.post<userModel>(`${this.baseUrl}/signUp`, data);
  }

  // -----------------------------------------------
  // 🔑 Sign In
  // -----------------------------------------------
  signIn(data: { email: string; password: string }) {
    return this.http
      .post<{ token: string }>(`${this.baseUrl}/signIn`, data)
      .pipe(
        tap((res) => {
          this.setToken(res.token);
          this.isLoggedIn.set(true);
          this.initAuth(); // โหลดข้อมูล user เลย
        })
      );
  }

  // -----------------------------------------------
  // 🚪 Sign Out
  // -----------------------------------------------
  signOut() {
    return this.http.post(`${this.baseUrl}/signOut`, {}, this.getAuthHeader()).pipe(
      tap(() => {
        this.clearToken();
        this.currentUser.set(null);
        this.isLoggedIn.set(false);
        this.isUserLoaded.set(false);
      })
    );
  }

  // -----------------------------------------------
  // 👤 Load user profile (me)
  // -----------------------------------------------
  loadUser() {
    if (!this.token()) {
      this.currentUser.set(null);
      this.isLoggedIn.set(false);
      this.isUserLoaded.set(false);
      return of(null);
    }

    if (this.isUserLoaded()) {
      return of(this.currentUser());
    }

    return this.http.get<userModel>(`${this.baseUrl}/user`, this.getAuthHeader()).pipe(
      tap((user) => {
        this.currentUser.set(user);
        this.currentUserRole.set(user.role);
        this.isLoggedIn.set(true);
        this.isUserLoaded.set(true);
      }),
      catchError(() => {
        this.currentUser.set(null);
        this.currentUserRole.set(null);
        this.isLoggedIn.set(false);
        this.isUserLoaded.set(false);
        return of(null);
      })
    );
  }

  // -----------------------------------------------
  // 🎭 Get user role
  // -----------------------------------------------
  getUserRole() {
    return this.loadUser().pipe(
      map((user) => user?.role ?? null),
      catchError(() => of(null))
    );
  }

  // -----------------------------------------------
  // 🔄 Auto-login (เช็ค token ตอนเปิดแอป)
  // -----------------------------------------------
  initAuth() {
    if (this.token()) {
      this.loadUser().subscribe();
    }
  }
}