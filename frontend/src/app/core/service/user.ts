import { userModel, userRepository } from '../repository/user';
import { inject, Injectable, signal } from '@angular/core';
import { of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class userService {
  private readonly repo = inject(userRepository);

  isLoading = signal(false);
  isLoaded = signal(false);
  isLoadingItem = signal(false);
  isLoadedItem = signal(false);

  params = signal<any>({});
  listUser = signal<userModel[]>([]);
  itemUser = signal<userModel | null>(null);

  /** -------------------
  *  Change Parameter
  * ------------------- */
  setParam(values: any) {
    this.params.set(values);
    this.isLoaded.set(false);
  }

  getAllUser() {
    if (this.isLoaded()) {
      this.isLoading.set(false);
      return of(this.listUser());
    }

    this.isLoading.set(true);
    return this.repo.getAllUser(this.params()).pipe(
      tap((res: any) => {
        this.listUser.set(res.data ?? []);
        this.isLoading.set(false);
        this.isLoaded.set(true);
      }),
    );
  }

  getUserById(id: string) {
    if (this.isLoadedItem()) {
      this.isLoadingItem.set(false);
      return of(this.itemUser());
    }

    this.isLoadingItem.set(true);
    return this.repo.getUserById(id).pipe(
      tap((res: any) => {
        this.itemUser.set(res.data ?? null);
        this.isLoadingItem.set(false);
        this.isLoadedItem.set(true);
      }),
    );
  }

  /** -------------------
  * CREATE / UPDATE / DELETE
  * ------------------- */
  createUser(data: userModel) {
    return this.repo.createUser(data);
  }

  updateUser(id: number, data: userModel) {
    return this.repo.updateUser(id, data);
  }

  deleteUser(id: number) {
    return this.repo.deleteUser(id);
  }

  resetPassword(id: number) {
    return this.repo.resetPassword(id);
  }
}
