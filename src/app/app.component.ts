import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, NgModule, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = '4sell';
  public firstName=signal(0);
  public computedFirstName=computed((this.firstName))
  changeName()
  {
    this.firstName.set(this.firstName() + 1);
  }
}
