import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';

// The http request headers
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

// Properties
todsUrl = "https://jsonplaceholder.typicode.com/todos";
todosLimit = "?_limit=10";

  constructor(private http: HttpClient) { }

  // Get todos
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todsUrl}${this.todosLimit}`);
  }

  // Toggle Completed = Update todos
  toggleCompleted(todo: Todo):Observable<any> {
    // The url that is needed to make the put request
    const url = `${this.todsUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }

  // Delete Todo
  deleteTodo(todo: Todo):Observable<Todo> {
    // The url that is needed to make the put request
    const url = `${this.todsUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }

}
