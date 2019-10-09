import { Component, OnInit } from '@angular/core';
import { GetUserDetailsService } from './get-user-details.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';
  userData: any;
  commentData: any;

  constructor(private getUserDetails: GetUserDetailsService) {  }

  ngOnInit() {
      this.getUserDetails.getUserDetails().subscribe(data => this.userData = data);

      this.getUserDetails.getCommentDetails().subscribe(data => this.commentData = data);
  }


}
