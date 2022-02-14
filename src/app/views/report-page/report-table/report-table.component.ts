import { Observable } from 'rxjs';
import { IColumn } from './IColumn';
import { ReportService } from './../report.service';
import { DataService } from './../../../services/data.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-report-table',
  templateUrl: './report-table.component.html',
  styleUrls: ['./report-table.component.css']
})
export class ReportTableComponent implements OnInit {

  @Input() table: boolean = false;
  @Input() tableName: string = 'sem nome'
  @Output() hideTable = new EventEmitter<boolean>();

  dados: Observable<IColumn[]>;

  displayedColumns =
  [
    'name',
    'email',
    'id_chamado',
    'enduser',
    'abertura',
    'fechamento',
    'data_limite',
    'chamados_ativos',
    'vencido',
    'reativado',
    'registro_usuario',
    'status',
    'clientes_disponiveis',
    'incluir_cliente_relacionado'
  ];

  constructor(
    private dataService: DataService,
    private ReportService: ReportService
  ) {
     // this.ReportService.list().subscribe(dados => this.dados = dados)
     this.dados = this.ReportService.list();
    }

  ngOnInit(): void {
    this.tableName = this.tableName;
  }

 //   dataSource = this.dados;

  closeTable(){
    this.table = false
    this.hideTable.emit(this.table)
    this.dataService.table = this.table
  }

}
