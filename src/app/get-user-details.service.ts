import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import  {Observable} from 'rxjs';

import {User} from './User';

@Injectable()
export class GetUserDetailsService {
  usersURL: string = "https://jsonplaceholder.typicode.com/users";
  commentsURL: string = "https://jsonplaceholder.typicode.com/comments";
  
  constructor(private http: HttpClient) { }

getUserDetails(): Observable<User> {
  return this.http.get<Observable<User>>(this.usersURL);
  }

getCommentDetails(): Observable<any> {
  return this.http.get<Observable<any>>(this.commentsURL);
  }
}