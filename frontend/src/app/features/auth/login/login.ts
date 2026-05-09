import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ButtonModule, CardModule, InputTextModule, PasswordModule],
  templateUrl: './login.html',
})
export class Login {
  router = inject(Router);

  onMockLogin() {
    // จำลองการ Login สำเร็จแล้วเซ็ต Token
    localStorage.setItem('token', 'mock-jwt-token-12345');
    this.router.navigate(['/dashboard']);
  }
}
