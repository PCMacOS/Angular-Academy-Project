import { Component, OnInit } from '@angular/core';
import { Table } from './table.model';
import { DataService } from './data.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'angularAcademyProject-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  tableData: Table[];
  titleOrderAsc: boolean;
  priorityOrderAsc: boolean;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    return this.dataService.getTable('').subscribe(data => this.tableData = data);
  }

  UpdateTableTitle() {
    this.priorityOrderAsc = null;
    if (this.titleOrderAsc) {
      this.titleOrderAsc = false;
      return this.dataService.getTable('?sort=title,desc').subscribe(data => this.tableData = data);
    } else {
      this.titleOrderAsc = true;
      return this.dataService.getTable('?sort=title,asc').subscribe(data => this.tableData = data);
    }
  }

  UpdateTablePriority() {
    this.titleOrderAsc = null;
    if (this.priorityOrderAsc) {
      this.priorityOrderAsc = false;
      return this.dataService.getTable('?sort=priority,desc').subscribe(data => this.tableData = data);
    } else {
      this.priorityOrderAsc = true;
      return this.dataService.getTable('?sort=priority,asc').subscribe(data => this.tableData = data);
    }
  }

}
