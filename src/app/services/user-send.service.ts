import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserSendService {
  private apiUrl = 'http://localhost:8000/api/users';

  constructor(private http: HttpClient) {}

  saveUser(user: any) {
    return this.http.post(this.apiUrl, user);
  }

  getUsers() {
    return this.http.get<any[]>(this.apiUrl);
  }
}
