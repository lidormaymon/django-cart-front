import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private apiUrl = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) { }

  orders :any[] = []

  checkOut(cart: any[]): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
  
    return this.http.post<any>(this.apiUrl + 'add-cart', cart, { headers: headers });
  }

  loadData() {
    return this.http.get<any>(this.apiUrl + 'orders');
  }

  delete(id: number): Observable<void> {
    const url = this.apiUrl + 'orders/' +`${id}`;
    return this.http.delete<void>(url);
  }
}
