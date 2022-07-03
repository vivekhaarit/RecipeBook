import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'project2';
  nav:String="recipe";
  onNavigate(feature:String){
    this.nav=feature;
  }
}
