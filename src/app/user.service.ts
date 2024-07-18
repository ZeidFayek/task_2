import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 // userId: any;
 constructor(private _HttpClient: HttpClient, private _ActivatedRoute: ActivatedRoute) {
  //   _ActivatedRoute.paramMap.subscribe((params) => {
  //     this.userId = params.get('id')
  //   })
  // }
  // getUserId(): number {
  //   return this.userId;
  }


  displayAllUser(): Observable<any> {
    return this._HttpClient.get(`https://jsonplaceholder.typicode.com/users`);
  }
  getDetailedViewUser(userId: number): Observable<any> {
    return this._HttpClient.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
  }
}
