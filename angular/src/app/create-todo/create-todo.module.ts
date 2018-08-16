import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureModule } from '../shared/feature.module';
import { RouterModule } from '@angular/router';
import { CreateTodoComponent } from './create-todo.component';

@NgModule({
  imports: [
    CommonModule,
    FeatureModule,
    RouterModule.forChild([
      { path: '', component: CreateTodoComponent }
    ])
  ],
  declarations: [CreateTodoComponent]
})
export class CreateTodoModule { }
