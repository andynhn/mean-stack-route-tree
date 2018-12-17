import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Route Tree';
  displayProducts: boolean = false;
  displayReviews: boolean = false;

  showProducts(){
    this.displayProducts = true;
    this.displayReviews = false;
  }
  showReviews(){
    this.displayReviews = true;
    this.displayProducts = false;
  }
}
