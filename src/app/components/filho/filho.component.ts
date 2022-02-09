import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent implements OnInit {

  @Input() nomeFilho: string = 'Sem nome';
  @Output() alterouNomeFilho = new EventEmitter<string>();

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.nomeFilho = this.nomeFilho
  }

  alterarNome() {
    this.nomeFilho = 'Paulo Eduardo'
    this.alterouNomeFilho.emit(this.nomeFilho)
    this.dataService.nomeUsuario = this.nomeFilho
  }

}
