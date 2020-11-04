import { Todo } from './../../models/Todo';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor() { }

  ngOnInit(): void {
  }

// Set dynamic classes
  setClasses() {
    let classes = {
      // Left-hand side is the name of the class
      // Right-hand side is if the class should be applied on that item or not
      todo: true,
      'is-completed': this.todo.completed
    }
    return classes;
  }

  onToggle(todo) {
    todo.completed = !todo.completed;
  }

  onDelete(todo) {
    console.log("Delete");
  }

}
