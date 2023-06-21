import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'http://127.0.0.1:8000/'; // Replace with your API URL
  constructor(private http: HttpClient) { }

  //Sign Up
  createUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'register/', user);
  }

  //Sign in
  login(user:any):Observable<any> {
    return this.http.post<any>(this.apiUrl + 'login/', user)
  }

  about(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    })
    return this.http.get<any>(this.apiUrl +"about", { headers: headers });
  }

}
