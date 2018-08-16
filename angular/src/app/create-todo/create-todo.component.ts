import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CreateTodoService } from '../service/create-todo-lists.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {
  docHeight: number;
  loading: boolean;
  createTodoLists: any;
  errorMessage: string;
  constructor( private router: Router, private createTodoService: CreateTodoService) { }

  ngOnInit() {
    this.docHeight = window.innerHeight; // document height
  }

  // create todo lists
  createTodo(title, details, assignTo, assignedBy) {

    this.createTodoService.createTodo(title, details, assignTo, assignedBy)
      .subscribe(todoLists => {
      this.createTodoLists = todoLists;
      this.router.navigate(['todoLists']);
      },
        error => { this.errorMessage = <any>error; this.loading = false; }
      );
  }

}
