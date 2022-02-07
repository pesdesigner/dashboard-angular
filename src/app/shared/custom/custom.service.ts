import { Custom } from './custom.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CustomService {

  baseUrl = "http://localhost:3000/pattern"

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(custom: Custom): Observable<Custom> {
    return this.http.post<Custom>(this.baseUrl, custom);
  }

  read(): Observable<Custom[]> {
    return this.http.get<Custom[]>(this.baseUrl);
  }

  readById(id: number): Observable<Custom> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Custom>(url)
  }

  update(custom: Custom): Observable<Custom> {
    const url = `${this.baseUrl}/${custom.id}`
    return this.http.put<Custom>(url, custom);
  }

  delete(id: number): Observable<Custom> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Custom>(url)
  }
}
