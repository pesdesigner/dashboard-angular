import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.css']
})
export class ReportPageComponent implements OnInit {

  tableScreen = ''

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  tableFullScreen(){
    this.tableScreen = 'tableScreen'
  }

  newReport(): void {
    this.router.navigate(['/reports/create']);
  }

}
