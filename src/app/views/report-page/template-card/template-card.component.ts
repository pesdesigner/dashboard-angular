import { ModalComponent } from './modal/modal.component';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-template-card',
  templateUrl: './template-card.component.html',
  styleUrls: ['./template-card.component.css']
})
export class TemplateCardComponent implements OnInit {

  @Output() onTable = new EventEmitter<boolean>();

  table: boolean = false
  tableName: string = 'Template personalizado #3'

  table1: string = 'Nome do Template #1'
  table2: string = 'Nome do Template #2'
  table3: string = this.tableName

  open = ``;
  panelOpenState1 = false;
  panelOpenState2 = false;
  panelOpenState3 = false;

  toppingList: string[] = [
    'Nome completo do solicitante',
    'Registrado por (e-mail)',
    'ID Chamado',
    'Email do solicitante (enduser)',
    'Período de abertura',
    'Período de fechamento',
    'Período Data Limite',
    'Chamados Ativos',
     'Vencido',
     'Reativado',
     'Registrado pelo usuário',
     'Status',
     'Clientes Disponíveis',
     'Incluir cliente relacionado',
     'VIP',
     'Login do solicitante (enduser)',
     'Site',
     'Localidade',
     'Localidade afetada',
     'Departamento Solicitante',
     'Solicitação (descrição)',
     'Detalhamento da solicitação',
     'Serviço',
     'Grupos Disponíveis',
     'Gerente',
     'Analista',
     'Tipo de serviço',
     'Tipo de change',
     'Competência',
     'Natureza',
     'Tópico',
     'Severidade',
     'Tipo de CI',
     'Resumo'
  ]

  toppingTemplate1: string[] = [
    'Nome completo do solicitante',
    'Registrado por (e-mail)',
    'ID Chamado',
    'Email do solicitante (enduser)',
    'Período de abertura',
    'Severidade',
    'Tipo de CI',
    'Resumo'
  ]

  toppingTemplate2: string[] = [
    'Analista',
    'Tipo de serviço',
    'Tipo de change',
    'Competência',
    'Natureza',
    'Tipo de CI',
    'Nome completo do solicitante',
    'Registrado por (e-mail)',
    'ID Chamado',
    'Email do solicitante (enduser)',
  ]

  toppingTemplate3: string[] = [
    'Nome completo do solicitante',
    'Registrado por (e-mail)',
    'ID Chamado',
    'Severidade',
    'Tipo de CI',
    'Nome completo do solicitante',
    'Registrado por (e-mail)',
    'ID Chamado',
    'Email do solicitante (enduser)',
  ]

  constructor(
    public dialog: MatDialog,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.toppingList = this.toppingList
    this.toppingTemplate1 = this.toppingTemplate1
    this.toppingTemplate2 = this.toppingTemplate2
    this.toppingTemplate3 = this.toppingTemplate3

    this.table1 = this.table1
    this.table2 = this.table2
    this.table3 = this.table3
  }

  openReport() {
    const dialogRef = this.dialog.open(ModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  tableColumns(){
    this.open = `open`;
  }

  showTable(tn: any){
    this.table = true
    this.dataService.table = this.table
    this.tableName = tn
    this.onTable.emit(this.table)
    this.dataService.table = this.table
  }

  hideTable(opt: boolean){
    this.table = opt
    this.dataService.table = opt
  }

  editTable(){
    console.log('edit page')
  }

}
