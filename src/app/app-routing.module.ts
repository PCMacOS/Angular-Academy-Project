import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './modules/table/table/table.component';
import { PostFormComponent } from './modules/table/post-form/post-form.component';


const routes: Routes = [
  { path: '', component: TableComponent },
  { path: 'post/:id',      component: PostFormComponent },
  { path: 'post',      component: PostFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
