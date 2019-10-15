import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Table } from '../table.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrlRegular = 'https://bug-report-system-server.herokuapp.com/bugs';

  constructor(private myhttp: HttpClient) { }

  getTable(attributes: string) {
    return this.myhttp.get<Table[]>(this.apiUrlRegular + attributes);
  }

  createbugs(bug: Table): Observable<any> {
    return this.myhttp.post(this.apiUrlRegular, bug );
  }

}
