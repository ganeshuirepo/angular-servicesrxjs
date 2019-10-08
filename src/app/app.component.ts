import { Component } from '@angular/core';
import { GetUserDetailsService } from './get-user-details.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  constructor(private getUserDetails: GetUserDetailsService) {

    this.getUserDetails.getDetails().subscribe(data => console.log(data));
  }


}
