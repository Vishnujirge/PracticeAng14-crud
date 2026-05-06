import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { Itodo } from '../module/itodo';

@Injectable({
  providedIn: 'root',
})
export class TodoServiceService {
  API_URL = environment.BASE_URL;
  constructor(private http: HttpClient) {}

  getTodos(): Observable<Itodo[]> {
    // return this.http.get<Itodo>(`${this.API_URL}/todos`);
    return this.http.get<Itodo[]>(`${this.API_URL}/todos`);
}
  }

