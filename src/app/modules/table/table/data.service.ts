import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Table } from '../table.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrlRegular = 'https://bug-report-system-server.herokuapp.com/bugs';

  constructor(private _http: HttpClient) { }

  getTable(attributes: string) {
    return this._http.get<Table[]>(this.apiUrlRegular + attributes);
  }

}
