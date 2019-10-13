import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableModule } from './modules/table/table.module';

import { HttpClientModule } from '@angular/common/http';
import { DataService } from './modules/table/table/data.service';
import { RouterModule } from '@angular/router';
import { BugComponent } from './modules/table/bug/bug.component';
import { TableComponent } from './modules/table/table/table.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: TableComponent},
      { path: 'bugs' , component: BugComponent }
    ])
  ],
  exports: [RouterModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
