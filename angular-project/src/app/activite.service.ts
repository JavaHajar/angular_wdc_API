import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Activite } from './activite';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ActiviteService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getActivite(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/activite/${id}`);
  }

  createActivite(activite: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/createactivite`, activite);
  }

  updateActivite(activite: Object): Observable<Object> {
    console.log({activite})
    return this.http.put(`${this.baseUrl}/updateactivite`, activite);    
  }

  deleteActivite(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/deleteactivite/${id}`);
  }

  getActiviteList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/activites`)
    // .map(response:Response) => response.json())
    //  .do(response => console.log('response = ', response))
  }
}
