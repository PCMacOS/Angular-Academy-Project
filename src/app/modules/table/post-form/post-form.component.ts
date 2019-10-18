import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../table/data.service';

@Component({
  selector: 'angularAcademyProject-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  status: any = ['Ready for test', 'Done', 'Rejected'];
  reporter: any = ['QA', 'PO', 'DEV'];
  priority: any = [
    { id: 0, name : 'Minor'},
    { id: 1, name : 'Major'},
    { id: 2, name : 'Critical'}
  ];
  postForm: FormGroup;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.postForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      priority: new FormControl('', Validators.required),
      reporter: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required)
    });
  }

  onSubmit(){
    console.log(this.postForm.value);
    this.dataService.createbugs(this.postForm.value).subscribe();
  }

}
