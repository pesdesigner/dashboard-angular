import { DataService } from './../../services/data.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.css']
})
export class ReportPageComponent implements OnInit {

  table: boolean = false
  tableName: string = 'Nome da tabela'

  constructor(
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
  }

  newReport(): void {
    this.router.navigate(['/reports/create']);
  }

  showTable(on: any){
    this.table = on
    this.dataService.table = this.table
  }

  hideTable(opt: boolean){
    this.table = opt
    this.dataService.table = opt
  }

}
