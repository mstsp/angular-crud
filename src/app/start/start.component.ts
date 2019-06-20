import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { Observable } from 'rxjs';
import { TodoModel } from '../todo-model';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  todos: Observable<TodoModel[]>;

  constructor(
    private todosService: TodosService
  ) { }
  
  ngOnInit() {
    this.todos = this.todosService.getAll()
  }

}
