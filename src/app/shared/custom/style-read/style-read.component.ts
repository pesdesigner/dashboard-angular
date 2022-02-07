import { CustomService } from './../custom.service';
import { Custom } from './../custom.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-read',
  templateUrl: './style-read.component.html',
  styleUrls: ['./style-read.component.css']
})
export class StyleReadComponent implements OnInit {

  patterns!: Custom[];
  displayedColumns = ['id', 'name', 'background', 'fontcolor', 'action']

  public custom = false;

  constructor(private customService: CustomService) { }

  ngOnInit(): void {
    this.customService.read().subscribe(patterns => {
      this.patterns = patterns
    })
  }

  selectStyle(){
    this.custom = true
  }
}
