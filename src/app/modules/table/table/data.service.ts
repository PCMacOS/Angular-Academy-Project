import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Table } from './table.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrlRegular = 'https://bug-report-system-server.herokuapp.com/bugs';
  apiUrlTitleDesc = 'https://bug-report-system-server.herokuapp.com/bugs?sort=title,desc';
  apiUrlTitleAsc = 'https://bug-report-system-server.herokuapp.com/bugs?sort=title,asc';

  constructor(private _http: HttpClient) { }

  getTable() {
    return this._http.get<Table[]>(this.apiUrlRegular);
  }

  getTableTitleDesc() {
    return this._http.get<Table[]>(this.apiUrlTitleDesc);
  }

  getTableTitleAsc() {
    return this._http.get<Table[]>(this.apiUrlTitleAsc);
  }
}
