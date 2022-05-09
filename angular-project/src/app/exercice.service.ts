import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Exercice } from './exercice';

@Injectable({
  providedIn: 'root'
})
export class ExerciceService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getExercice(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/exercice/${id}`);
  }

  createExercice(exercice: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/createExercice`, exercice);
  }

  updateExercice(exercice: Object): Observable<Object> {
    console.log({exercice})
    return this.http.put(`${this.baseUrl}/updateExercice`, exercice);    
  }

  deleteExercice(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/deleteExercice/${id}`);
  }

  getExercicesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/exercices`);
  }
}
