import { DataService } from './../../services/data.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

export interface HeadElement {
  id: string;
  name: string;
  email: string;
  status: string;
}

const TEMPLATE_DATA: HeadElement[] = [
  {
    id: '#ID',
    name: 'Nome',
    email: 'E-mail',
    status: 'Status'
  }
]

export interface ColumnElement {
  id: number;
  name: string;
  email: string;
  status: string;
}

const ELEMENT_DATA: ColumnElement[] = [
  {
    id: 1,
    name: 'Pedro Carlos',
    email: 'pedro@teste.com.br',
    status: 'ativo'
  },
  {
    id: 2,
    name: 'Areli Santos',
    email: 'areli@teste.com.br',
    status: 'ativo'
  },
  {
    id: 3,
    name: 'Ana Beatriz',
    email: 'aminha@email.com.br',
    status: 'inativo'
  },
]

const ELEMENT_DATA2: ColumnElement[] = [
  {
    id: 1,
    name: 'Maria',
    email: 'maria@teste.com.br',
    status: 'ativo'
  },
  {
    id: 2,
    name: 'Jorge Santos',
    email: 'jorgao@teste.com.br',
    status: 'ativo'
  },
]

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() table: boolean = false;
  @Input() tableName: string = 'sem nome'
  @Output() hideTable = new EventEmitter<boolean>();

  displayedColumns = TEMPLATE_DATA
  dataSource = ELEMENT_DATA;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.tableName = this.tableName
  }

  closeTable(){
    this.table = false
    this.hideTable.emit(this.table)
  }

}
