import { Component } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent {
  todos: Todo[] = [];
  constructor() {
    this.todos = [
      {
        sno: 1,
        title: 'test todo',
        desc: 'test des',
        active: true,
      },
      {
        sno: 2,
        title: 'test todo',
        desc: 'test des',
        active: true,
      },
      {
        sno: 3,
        title: 'test todo',
        desc: 'test des',
        active: true,
      },
    ];
  }

  onDeleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
}
