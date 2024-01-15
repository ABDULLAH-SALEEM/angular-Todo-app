import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  @Input()
  todo!: Todo;

  @Output() onDeleteTodoEmitter: EventEmitter<Todo> = new EventEmitter();

  constructor() {}
  onDeleteTodo(todo: Todo) {
    this.onDeleteTodoEmitter.emit(todo);
  }
}
