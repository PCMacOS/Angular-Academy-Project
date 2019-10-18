import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './modules/table/table/table.component';
import { PostFormComponent } from './modules/table/post-form/post-form.component';
import { ConfirmationGuard } from './confirmation.guard';


const routes: Routes = [
  { path: '', component: TableComponent },
  { path: 'post/:id',      component: PostFormComponent, canDeactivate: [ConfirmationGuard] },
  { path: 'post',      component: PostFormComponent, canDeactivate: [ConfirmationGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
