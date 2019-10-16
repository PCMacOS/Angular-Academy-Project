import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {  Table } from '../table.model';
import { DataService } from '../table/data.service';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'angularAcademyProject-bug',
  templateUrl: './bug.component.html',
  styleUrls: ['./bug.component.scss']
})


export class BugComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router, private formBuilder: FormBuilder) { }

  public myForm: FormGroup;
  topics  = [
    {id: 0, name: 'Minor'},
    {id: 1, name: 'Major'},
    {id: 2, name: 'Critical'}
  ];
  reporters =  [
    {  id: 0, name : 'QA'},
    { id: 1 , name : 'PO'},
    { id: 2, name : 'DEV'}
 ];
  statusoptions = [
    { id: 0 , name : 'Ready for test'},
    { id: 1, name : 'Done' },
    { id: 2, name: 'Rejected'}
  ];

  ngOnInit() {
    this.myForm = new FormGroup({
     title: new FormControl('', [Validators.required]),
     description : new FormControl('', [Validators.required]),
     priority : new FormControl('', [Validators.required]),
     reporter : new FormControl(''),
     status : new FormControl('')
  });

}

  Onsubmit() {
    console.log(this.myForm.value);
    this.dataService.createbugs(this.myForm.value).subscribe(data => {
    console.log(data);
   });

  }


}
