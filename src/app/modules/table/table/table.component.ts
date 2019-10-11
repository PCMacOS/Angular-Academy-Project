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
  reporterOrderAsc: boolean;
  dateCreatedOrderAsc: boolean;
  statusOrderAsc: boolean;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    return this.dataService.getTable('').subscribe(data => this.tableData = data);
  }

  UpdateTableTitle() {
    this.priorityOrderAsc = null;
    this.reporterOrderAsc = null;
    this.dateCreatedOrderAsc = null;
    this.statusOrderAsc = null;
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
    this.reporterOrderAsc = null;
    this.dateCreatedOrderAsc = null;
    this.statusOrderAsc = null;
    if (this.priorityOrderAsc) {
      this.priorityOrderAsc = false;
      return this.dataService.getTable('?sort=priority,desc').subscribe(data => this.tableData = data);
    } else {
      this.priorityOrderAsc = true;
      return this.dataService.getTable('?sort=priority,asc').subscribe(data => this.tableData = data);
    }
  }

  UpdateTableReporter() {
    this.titleOrderAsc = null;
    this.priorityOrderAsc = null;
    this.dateCreatedOrderAsc = null;
    this.statusOrderAsc = null;
    if (this.reporterOrderAsc) {
      this.reporterOrderAsc = false;
      return this.dataService.getTable('?sort=reporter,desc').subscribe(data => this.tableData = data);
    } else {
      this.reporterOrderAsc = true;
      return this.dataService.getTable('?sort=reporter,asc').subscribe(data => this.tableData = data);
    }
  }

  UpdateTableDateCreated() {
    this.titleOrderAsc = null;
    this.priorityOrderAsc = null;
    this.reporterOrderAsc = null;
    this.statusOrderAsc = null;
    if (this.dateCreatedOrderAsc) {
      this.dateCreatedOrderAsc = false;
      return this.dataService.getTable('?sort=createdAt,desc').subscribe(data => this.tableData = data);
    } else {
      this.dateCreatedOrderAsc = true;
      return this.dataService.getTable('?sort=createdAt,asc').subscribe(data => this.tableData = data);
    }
  }

  UpdateTableStatus() {
    this.titleOrderAsc = null;
    this.priorityOrderAsc = null;
    this.reporterOrderAsc = null;
    this.dateCreatedOrderAsc = null;
    if (this.statusOrderAsc) {
      this.statusOrderAsc = false;
      return this.dataService.getTable('?sort=status,desc').subscribe(data => this.tableData = data);
    } else {
      this.statusOrderAsc = true;
      return this.dataService.getTable('?sort=status,asc').subscribe(data => this.tableData = data);
    }
  }

}
