import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AccountService } from './core/services/account.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'king';

  constructor(private accountService: AccountService, private router: Router) {}

  private fb = new FormBuilder();

  loginForm = this.fb.group({
    email: ['', [Validators.email]],
    password: ['', [Validators.minLength(8)]],
  });

  submitForm() {
    this.accountService.loginUser(this.loginForm.value).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
