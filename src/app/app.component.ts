import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  emittedFeature: string;

  onNavigate(theFeature: string) {
    this.emittedFeature = theFeature;
  }
}
