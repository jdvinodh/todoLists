import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    NgxPaginationModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    PipesModule,
    NgxPaginationModule
],
  declarations: []
})
export class FeatureModule { }
