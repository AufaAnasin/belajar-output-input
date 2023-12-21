import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public clickCount:number = 0
  title = 'angularx';
    onCountChanged(count: number): void {
    this.clickCount = count
  }
}
