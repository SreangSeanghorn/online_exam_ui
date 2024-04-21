
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import e from 'express';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateClient {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${environment.apiUrl}/authentication/login`, { username, password });
  }

  register(
    username: string, 
    email: string,
    password: string,
    dateOfBirth: Date
    ): Observable<any> {
    return this.http.post(`${environment.apiUrl}/authentication/register`,
     { email,username,dateOfBirth,password});
  }
}