import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  nomeUsuario: string = 'Login...'
  table: boolean = false
  tableName: string = 'Nome da tabela Default'

  nome$ = new EventEmitter<string>();

  constructor() { }
}
