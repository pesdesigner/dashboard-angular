import { DataService } from './../../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  table: boolean = false
  tableName: string = 'Nome da tabela'

  table1: string = 'TABLE 1'
  table2: string = 'TABLE 2'
  table3: string = this.tableName

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.table1 = this.table1
    this.table2 = this.table2
  }

  showTable(tn: string){
    this.table = true
    this.dataService.table = this.table
    this.tableName = tn
  }

  hideTable(opt: boolean){
    this.table = opt
    this.dataService.table = opt
  }

}
