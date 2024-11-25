import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LearningResourcesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'AuthPage';
}
