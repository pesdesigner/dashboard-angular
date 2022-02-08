import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-table',
  templateUrl: './report-table.component.html',
  styleUrls: ['./report-table.component.css']
})
export class ReportTableComponent implements OnInit {

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
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}

export interface columnElement {
  name: string;
  email: string;
  id_chamado: string;
  enduser: string;
  abertura: string;
  fechamento: string;
  data_limite: string;
  chamados_ativos: string;
  vencido: string;
  reativado: string;
  registro_usuario: string;
  status: string;
  clientes_disponiveis: string;
  incluir_cliente_relacionado: string;
}

const ELEMENT_DATA: columnElement[] = [
  {
    name: 'nome teste',
    email: 'email@teste',
    id_chamado: '45678',
    enduser: 'enduser',
    abertura: 'abertura',
    fechamento: 'fechamento',
    data_limite: '10/05/1901',
    chamados_ativos: '46456',
    vencido: '12/06/1902',
    reativado: 'dados reativado',
    registro_usuario: 'registro usuário',
    status: 'ativo',
    clientes_disponiveis: 'lista clientes',
    incluir_cliente_relacionado: 'cliente relacionado'
  },
  {
    name: 'nome teste',
    email: 'email@teste',
    id_chamado: '45678',
    enduser: 'enduser',
    abertura: 'abertura',
    fechamento: 'fechamento',
    data_limite: '10/05/1901',
    chamados_ativos: '46456',
    vencido: '12/06/1902',
    reativado: 'dados reativado',
    registro_usuario: 'registro usuário',
    status: 'ativo',
    clientes_disponiveis: 'lista clientes',
    incluir_cliente_relacionado: 'cliente relacionado'
  },
  {
    name: 'nome teste',
    email: 'email@teste',
    id_chamado: '45678',
    enduser: 'enduser',
    abertura: 'abertura',
    fechamento: 'fechamento',
    data_limite: '10/05/1901',
    chamados_ativos: '46456',
    vencido: '12/06/1902',
    reativado: 'dados reativado',
    registro_usuario: 'registro usuário',
    status: 'ativo',
    clientes_disponiveis: 'lista clientes',
    incluir_cliente_relacionado: 'cliente relacionado'
  },
  {
    name: 'nome teste',
    email: 'email@teste',
    id_chamado: '45678',
    enduser: 'enduser',
    abertura: 'abertura',
    fechamento: 'fechamento',
    data_limite: '10/05/1901',
    chamados_ativos: '46456',
    vencido: '12/06/1902',
    reativado: 'dados reativado',
    registro_usuario: 'registro usuário',
    status: 'ativo',
    clientes_disponiveis: 'lista clientes',
    incluir_cliente_relacionado: 'cliente relacionado'
  },
  {
    name: 'nome teste',
    email: 'email@teste',
    id_chamado: '45678',
    enduser: 'enduser',
    abertura: 'abertura',
    fechamento: 'fechamento',
    data_limite: '10/05/1901',
    chamados_ativos: '46456',
    vencido: '12/06/1902',
    reativado: 'dados reativado',
    registro_usuario: 'registro usuário',
    status: 'ativo',
    clientes_disponiveis: 'lista clientes',
    incluir_cliente_relacionado: 'cliente relacionado'
  },
  {
    name: 'nome teste',
    email: 'email@teste',
    id_chamado: '45678',
    enduser: 'enduser',
    abertura: 'abertura',
    fechamento: 'fechamento',
    data_limite: '10/05/1901',
    chamados_ativos: '46456',
    vencido: '12/06/1902',
    reativado: 'dados reativado',
    registro_usuario: 'registro usuário',
    status: 'ativo',
    clientes_disponiveis: 'lista clientes',
    incluir_cliente_relacionado: 'cliente relacionado'
  },
];
