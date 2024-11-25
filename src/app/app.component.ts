import { Component, computed, inject } from '@angular/core';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LearningResourcesComponent, AuthComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'AuthPage';

  private authService = inject(AuthService);

  isAdmin = computed(() => this.authService.activePermission() === 'admin');
}
