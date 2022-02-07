import { CustomService } from './../custom.service';
import { Custom } from './../custom.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-style-update',
  templateUrl: './style-update.component.html',
  styleUrls: ['./style-update.component.css']
})
export class StyleUpdateComponent implements OnInit {

  custom!: Custom;

  constructor(
    private customService: CustomService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.customService.readById(id).subscribe((custom) => {
      this.custom = custom
    })
  }

  updateStyle(): void{
    this.customService.update(this.custom).subscribe(() => {
      this.customService.showMessage('Estilo atualizado com sucesso!')
      this.router.navigate(['/dashboard'])
    })
  }

  cancel(): void {
    this.router.navigate(['/dashboard'])
  }

}
