import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ContactRequest, Table } from '../table.model';

@Component({
  selector: 'angularAcademyProject-bug',
  templateUrl: './bug.component.html',
  styleUrls: ['./bug.component.scss']
})


export class BugComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  myForm: FormGroup;
  topics = [ 'Minor',  'Major',  'Critical' ];
  reporters = [ 'QA ', 'PO', 'DEV'];
  statusoptions = ['Ready for test', 'Done', 'Rejected'];
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
    mydata: new FormGroup({

      title: new FormControl(),
      description: new FormControl(),
      priority: new FormControl(),
      reporter: new FormControl(),
      status: new FormControl()
   }),
  });

  }

  onSubmit() {
    const result: ContactRequest = Object.assign({}, this.myForm.value);
    result.mydata = Object.assign({}, result.mydata);

  }

  revert() {
    // Resets to blank object
    this.myForm.reset();

    // Resets to provided model
    this.myForm.reset({ mydata: new Table(), requestType: '', text: '' });
  }

}
