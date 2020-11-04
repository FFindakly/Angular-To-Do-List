import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  // Properties
  title: string;

  constructor() { }

  ngOnInit(): void {
  }

onSubmit() {
  const todo = {
    // Get the title from the form that is retrieved with the two-way binding
    title: this.title,
    completed: false
  }

  this.addTodo.emit(todo);
}
}
