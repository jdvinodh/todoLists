import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './login/login.module#LoginModule',
  },
  {
    path: 'todoLists',
    loadChildren: './todo-lists/todo-lists.module#TodoListsModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'createTodo',
    loadChildren: './create-todo/create-todo.module#CreateTodoModule',
  },
  {
    path: 'login',
    redirectTo: '',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
