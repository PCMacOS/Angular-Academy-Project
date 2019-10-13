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
  topics = [ 'Minor',  'Major',  'Critical' ];
  topicHasError = true;

  validateTopic(value) {
    if ( value === 'default' ) {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

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
