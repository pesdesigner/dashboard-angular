import { Injectable } from '@angular/core';
import { EventEmitter } from 'stream';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  emitirTable = new EventEmitter();

  optTable = 'open'

  constructor() { }

}
