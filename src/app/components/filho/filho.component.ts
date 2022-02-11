import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent implements OnInit, OnDestroy {

  @Input() nomeFilho: string = 'Sem nome';
  @Output() alterouNomeFilho = new EventEmitter<string>();

  mensagem: string = 'Mensagem componente filho'

  nomeSubscription: Subscription = new Subscription;

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit(): void {
    this.nomeFilho = this.nomeFilho

/*     this.nomeSubscription = this.dataService.nome$.subscribe(texto => {
      console.log('filho:', texto);
      this.mensagem = texto;
    }); */

   // this.dataService.nome$.emit('Filho!');
  }

  ngOnDestroy() {
/*     console.log('ngOnDestroy filho')
      this.nomeSubscription.unsubscribe(); */
  }

  alterarNome() {
    this.nomeFilho = 'Paulo Eduardo'
    this.alterouNomeFilho.emit(this.nomeFilho)
    this.dataService.nomeUsuario = this.nomeFilho
  }

}
