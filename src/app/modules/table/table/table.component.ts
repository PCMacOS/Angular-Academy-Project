import { Component, OnInit } from '@angular/core';
import { Table } from './table.model';
import { DataService } from './data.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'angularAcademyProject-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  tableData: Table[];
  shearchForm: FormGroup;
  titleOrderAsc: boolean;
  priorityOrderAsc: boolean;
  reporterOrderAsc: boolean;
  dateCreatedOrderAsc: boolean;
  statusOrderAsc: boolean;

  status: any = [
    { id: '', name : 'All'},
    { id: 'Ready for test', name : 'Ready for test'},
    { id: 'Done', name : 'Done'},
    { id: 'Rejected', name : 'Rejected'}
  ];
  reporter: any = [
    { id: '', name : 'All'},
    { id: 'QA', name : 'QA'},
    { id: 'PO', name : 'PO'},
    { id: 'DEV', name : 'DEV'}
  ];
  priority: any = [
    { id: '', name : 'All'},
    { id: 1, name : 'Minor'},
    { id: 2, name : 'Major'},
    { id: 3, name : 'Critical'}
  ];
  order: number;
  viewSize: number;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.priorityOrderAsc = null;
    this.reporterOrderAsc = null;
    this.dateCreatedOrderAsc = null;
    this.statusOrderAsc = null;
    this.titleOrderAsc = null;
    this.order = 0;
    this.viewSize = 10;

    this.shearchForm = new FormGroup({
      title: new FormControl(''),
      priority: new FormControl(''),
      reporter: new FormControl(''),
      status: new FormControl('')
    });

    return this.dataService.getTable('').subscribe(data => this.tableData = data);
  }

  onKey(event) {this.viewSize = event.target.value;}

  Next() {
    this.order++;
    return this.dataService.getTable('?page=' + this.order + '&size=' + this.viewSize).subscribe(data => this.tableData = data);
  }

  SetSize() {
    return this.dataService.getTable('?page=' + this.order + '&size=' + this.viewSize).subscribe(data => this.tableData = data);
  }

  Previous() {
    this.order--;
    return this.dataService.getTable('?page=' + this.order + '&size=' + this.viewSize).subscribe(data => this.tableData = data);
  }

  CheckIfPrevious() {
    return this.order === 0;
  }

  CheckIfNext() {
    return this.tableData.length < this.viewSize;
  }

  DeleteBugs(id: string, index: number){
    if (confirm('Are you sure you want to delete this?')) {
    this.dataService.deleteBugs(id).subscribe((ret) => {
          console.log('Bug deleted: ', ret);
    });
    delete this.tableData[index];
  }
  }

  onSubmit() {
    console.log(this.shearchForm.value);
    return this.dataService.getTable(
      '?title=' + this.shearchForm.value.title + '&priority=' +
      this.shearchForm.value.priority + '&reporter=' +
      this.shearchForm.value.reporter + '&status=' + this.shearchForm.value.status
      ).subscribe(data => this.tableData = data);
  }

  EditBugs(id: string) {
    this.router.navigate(['post', id]);
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
