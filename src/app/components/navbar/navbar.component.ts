import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  mensagem: string = 'Bem-vindo!'

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.nome$.subscribe(texto => {
      this.mensagem = texto;
      console.log('navbar:', texto);
    })
  }

}
