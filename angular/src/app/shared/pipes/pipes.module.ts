import { NgModule } from '@angular/core';
import { SearchFilterPipe } from './search-filter.pipe';

@NgModule({
  imports: [],
  declarations: [SearchFilterPipe],
  exports: [
    SearchFilterPipe
  ]
 })
export class PipesModule { }
