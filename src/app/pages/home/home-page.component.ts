import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  nome: string = 'Nome do usuário'

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.nome = this.nome
  }

  alterarNome() {
    this.nome = 'Pedro Carlos'
    this.dataService.nomeUsuario = this.nome
  }

  filhoAlterouNome(novoNome: string) {
    this.nome = novoNome
    this.dataService.nomeUsuario = novoNome
  }

  alterarMensagem(){
    this.dataService.nome$.emit('Areli Souza')
  }

}
