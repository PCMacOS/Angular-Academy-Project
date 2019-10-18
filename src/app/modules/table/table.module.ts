import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { PostFormComponent } from './post-form/post-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [TableComponent, PostFormComponent],
  imports: [
    CommonModule, ReactiveFormsModule, RouterModule
  ],
  exports: [TableComponent, PostFormComponent]
})
export class TableModule { }
