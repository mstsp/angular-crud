import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { TodoModel } from './todo-model';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private url:string = 'http://localhost:3000/todos/'
  constructor(
    private httpClient:  HttpClient
  ) { }

  public getAll(): Observable<any> {
    return this.httpClient.get(this.url)
    .pipe(
      map((response: HttpResponse<TodoModel[]>) => {
        return response.body
      })
    );
  }
}
