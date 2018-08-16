import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TodoListsComponent } from './todo-lists.component';
import { FeatureModule } from '../shared/feature.module';

@NgModule({
  imports: [
    CommonModule,
    FeatureModule,
    RouterModule.forChild([
      { path: '', component: TodoListsComponent }
    ])
  ],
  declarations: [TodoListsComponent]
})

export class TodoListsModule { }
