import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'angularAcademyProject-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  status: any = ['Ready for test', 'Done', 'Rejected'];
  reporter: any = ['QA', 'PO', 'DEV'];
  priority: any = ['Minor', 'Major', 'Critical'];
  postForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.postForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      priority: new FormControl('', Validators.required),
      reporter: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
    });
  }

  onSubmit(){
    console.log(this.postForm.value);
  }

}
