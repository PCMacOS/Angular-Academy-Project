import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { DataService } from '../table/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Table } from '../table/table.model';
import { CommentBug } from '../table/comment.model';

@Component({
  selector: 'angularAcademyProject-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  editFlag: boolean;
  status: any = [
    { id: 'Ready for test', name : 'Ready for test'},
    { id: 'Done', name : 'Done'},
    { id: 'Rejected', name : 'Rejected'}
  ];
  reporter: any = [
    { id: 'QA', name : 'QA'},
    { id: 'PO', name : 'PO'},
    { id: 'DEV', name : 'DEV'}
  ];
  priority: any = [
    { id: 1, name : 'Minor'},
    { id: 2, name : 'Major'},
    { id: 3, name : 'Critical'}
  ];
  postForm: FormGroup;
  commentForm: FormGroup;
  submitFlag;
  bugId: any;
  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.submitFlag = false;
    this.editFlag = false;
    this.postForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      priority: new FormControl('', Validators.required),
      reporter: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      comments: new FormGroup({
        reporter: new FormControl(''),
        description: new FormControl(''),
      })
    });

    this.commentForm = new FormGroup({
      description: new FormControl('', Validators.required),
      reporter: new FormControl('', Validators.required)
    });

    this.route.paramMap.subscribe(params => {
      this.bugId = params.get('id');
      if (!(this.bugId == null)) {
        this.getBug(this.bugId);
        this.editFlag = true;
      }
    });
  }

  onSubmit() {
    console.log(this.postForm.value);
    if (!this.editFlag) { this.dataService.createbugs(this.postForm.value).subscribe(); }
    else { this.dataService.updateBugs(this.bugId, this.postForm.value).subscribe(); }
    this.submitFlag = true;
    this.router.navigate(['']);
  }

  onSubmitComment() {
    console.log(this.commentForm.value);
    if (this.editFlag) {
      this.dataService.addComment(this.bugId, this.commentForm.value).subscribe();
    }
  }

  getBug(id: string) {
    this.dataService.getTable('/' + id).subscribe(
      (bug: any) => this.editBug(bug),
      (err: any) => console.log(err)
    );
  }

  editBug(bug: Table) {
    this.postForm.patchValue({
      title: bug.title,
      description: bug.description,
      priority: bug.priority,
      reporter: bug.reporter,
      status: bug.status
    });
  }

  confirm() {
    if (this.postForm.dirty && !this.submitFlag) {
      return confirm('Are you sure you want to leave this page?');
    }
    else {
      return true;
    }
 }

}
