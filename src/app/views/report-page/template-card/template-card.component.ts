import { ModalComponent } from './modal/modal.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-template-card',
  templateUrl: './template-card.component.html',
  styleUrls: ['./template-card.component.css']
})
export class TemplateCardComponent implements OnInit {

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
    'Período de fechamento',
    'Detalhamento da solicitação',
    'Natureza',
    'Tópico',
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
    'Tópico',
    'Severidade',
    'Tipo de CI',
    'Nome completo do solicitante',
    'Registrado por (e-mail)',
    'ID Chamado',
    'Email do solicitante (enduser)',
  ]

  constructor(
    public dialog: MatDialog
  ) { }

  openReport() {
    const dialogRef = this.dialog.open(ModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  tableColumns(){
    this.open = `open`;
  }

  ngOnInit(): void {
    this.toppingList = this.toppingList
    this.toppingTemplate1 = this.toppingTemplate1
    this.toppingTemplate2 = this.toppingTemplate2
  }
}
