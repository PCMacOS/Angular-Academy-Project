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

  constructor(private dataService: DataService) { }

  ngOnInit() {
    return this.dataService.getTable('').subscribe(data => this.tableData = data);
  }

  UpdateTableTitle() {
    if (this.titleOrderAsc) {
      this.titleOrderAsc = false;
      return this.dataService.getTable('?sort=title,desc').subscribe(data => this.tableData = data);
    } else {
      this.titleOrderAsc = true;
      return this.dataService.getTable('?sort=title,asc').subscribe(data => this.tableData = data);
    }
  }

}
