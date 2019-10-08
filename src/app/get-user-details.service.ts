import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import  {Observable} from 'rxjs';

import {User} from './User';

@Injectable()
export class GetUserDetailsService {
  url: string = "https://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient) { }

getDetails(): Observable<any> {
  return this.http.get<Observable<User>>(this.url);
  }
}