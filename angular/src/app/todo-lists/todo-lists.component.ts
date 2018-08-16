import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../shared/service/data.service';
import { TodoService } from '../service/todo-lists.service';
@Component({
  selector: 'app-todo-lists',
  templateUrl: './todo-lists.component.html',
  styleUrls: ['./todo-lists.component.css']
})
export class TodoListsComponent implements OnInit {



  username: string;
  loading: boolean;
  errorMessage: string;
  getTodoResult: any;
  deleteTodoResult: any;

  constructor(private router: Router, private dataService: DataService, private todoService: TodoService) { }

  ngOnInit() {
   // this.dataService.currentName.subscribe(detail => this.username = detail);
    this.getTodoLists();
  }

  // get todo lists
  getTodoLists() {
    this.loading = true;
    this.todoService.getTodo()
      .subscribe(todoResult => { this.getTodoResult = todoResult;  this.loading = false;},
        error => this.errorMessage = <any>error);
  }

  // delete todo lists
  deleteTodo(getTodoRes) {
    this.loading = true;
    this.todoService.deleteTodo(getTodoRes)
    .subscribe(todoDelete => { this.deleteTodoResult = todoDelete;
      this.getTodoLists();
      this.loading = false; },
      error => this.errorMessage = <any>error);
  }

  // logout
  Logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

}
