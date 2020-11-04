import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Fadi';

  constructor() {
    this.changeName("Emma");
  }

  changeName(newName: string): void {
    this.name = newName; 
  }
}
