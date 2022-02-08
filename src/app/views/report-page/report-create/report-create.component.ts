import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-report-create',
  templateUrl: './report-create.component.html',
  styleUrls: ['./report-create.component.css']
})
export class ReportCreateComponent implements OnInit {

  report = {
    name: '',
  }

  mostrar: boolean = false;

  toppings = new FormControl();
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

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.toppingList = this.toppingList
  }

  createReport(): void{

  }

  cancel(): void {
    this.router.navigate(['/reports'])
  }

  toggle () {
    this.mostrar = !this.mostrar;
  }
}
