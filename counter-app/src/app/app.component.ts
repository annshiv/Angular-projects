import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Counter App';

  count:number = 0;

  increase = () => {
    if (this.count >= 10) {
      this.count == 10;
    } else {
      this.count += 1;
    }
  }

  decrease = () => {
    if (this.count < 1) {
      this.count == 0;
    } else {
      this.count -= 1;
    }
  }
  reset = () => {
    this.count = 0;
  }
}
