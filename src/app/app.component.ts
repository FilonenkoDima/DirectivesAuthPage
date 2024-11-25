import { Component } from '@angular/core';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';
import { AuthComponent } from './auth/auth.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LearningResourcesComponent, AuthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'AuthPage';
}
