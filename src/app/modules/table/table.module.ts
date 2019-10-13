import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { BugComponent } from './bug/bug.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [TableComponent, BugComponent],
  imports: [
    CommonModule, AppRoutingModule, ReactiveFormsModule
  ],
  exports: [TableComponent, BugComponent]
})
export class TableModule { }
