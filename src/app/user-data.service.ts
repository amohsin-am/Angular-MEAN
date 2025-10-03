import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http: HttpClient) {}

  getUserData(): Observable<any> {
    return this.http.get('http://localhost:8000/get_many_data');
  }

  saveUser(user: any): Observable<any> {
    return this.http.post('http://localhost:8000/data_from_react', user);
  }

  getUserById(id: string): Observable<any> {
    return this.http.get(`http://localhost:8000/get_user/${id}`);
  }

  updateUser(id: string, user: any): Observable<any> {
    return this.http.put(`http://localhost:8000/update_user/${id}`, user);
  }
}
