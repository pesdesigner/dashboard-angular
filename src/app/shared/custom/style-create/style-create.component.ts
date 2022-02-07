import { ColorPickerModule } from 'ngx-color-picker';
import { Custom } from './../custom.model';
import { CustomService } from './../custom.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-create',
  templateUrl: './style-create.component.html',
  styleUrls: ['./style-create.component.css']
})
export class StyleCreateComponent implements OnInit {

  custom: Custom = {
    name: '',
    background: '',
    fontcolor: ''
  }

  constructor(
    private customService: CustomService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createStyle(): void{
    this.customService.create(this.custom).subscribe(() => {
      this.customService.showMessage('Estilo criado com sucesso!')
      this.router.navigate(['/dashboard'])
    })
  }

  cancel(): void {
    this.router.navigate(['/dashboard'])
  }
}
