import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

// Properties
todsUrl = "https://jsonplaceholder.typicode.com/todos";
todosLimit = "?_limit=10";

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todsUrl}${this.todosLimit}`);

    }
  }
