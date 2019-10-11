import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'angularAcademyProject-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  table: any[][] = [['Dummy Title 1', 'Dummy Priority 1', 'Dummy Reporter 1', 'Dummy Date Created 1', 'Dummy Status 1'],
  ['Dummy Title 2', 'Dummy Priority 2', 'Dummy Reporter 2', 'Dummy Date Created 2', 'Dummy Status 2'],
  ['Dummy Title 3', 'Dummy Priority 3', 'Dummy Reporter 3', 'Dummy Date Created 3', 'Dummy Status 3']];

  constructor() { }

  ngOnInit() {
  }

}
