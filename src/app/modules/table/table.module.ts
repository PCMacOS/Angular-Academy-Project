import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { PostFormComponent } from './post-form/post-form.component';



@NgModule({
  declarations: [TableComponent, PostFormComponent],
  imports: [
    CommonModule
  ],
  exports: [TableComponent, PostFormComponent]
})
export class TableModule { }
