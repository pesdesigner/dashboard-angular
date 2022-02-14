import { tap, first } from 'rxjs/operators';
import { IColumn } from './report-table/IColumn';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private readonly API = 'http://localhost:3000/columnElement';

  //emitirTable = new EventEmitter();

  optTable = 'open'

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<IColumn[]>(this.API)
    .pipe(
      first(),
      tap(dados => console.log(dados))
    );
  }

}
