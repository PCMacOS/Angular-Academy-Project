import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Table } from './table.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrlRegular = 'https://bug-report-system-server.herokuapp.com/bugs';

  constructor(private _http: HttpClient) { }

  getTable(attributes: string) {
    return this._http.get<Table[]>(this.apiUrlRegular + attributes);
  }

  createbugs(bug: Table): Observable<any> {
    return this._http.post(this.apiUrlRegular, bug );
  }

  deleteBugs(id: string) {
    return this._http.delete(this.apiUrlRegular + '/' + id);
  }

  updateBugs(id: string, bug: Table) {
    return this._http.put(this.apiUrlRegular + '/' + id, bug);
  }
}
