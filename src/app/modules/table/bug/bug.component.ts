import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'angularAcademyProject-bug',
  templateUrl: './bug.component.html',
  styleUrls: ['./bug.component.scss']
})


export class BugComponent implements OnInit {

  constructor() { }
  myForm: FormGroup;

  ngOnInit() {
    this.myForm = new FormGroup({
      title: new FormControl(),
      description: new FormControl(),
      priority: new FormControl(),
      reporter: new FormControl(),
      status: new FormControl()
   });
  }

}
