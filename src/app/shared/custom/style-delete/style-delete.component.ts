import { Router, ActivatedRoute } from '@angular/router';
import { CustomService } from './../custom.service';
import { Custom } from './../custom.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-delete',
  templateUrl: './style-delete.component.html',
  styleUrls: ['./style-delete.component.css']
})
export class StyleDeleteComponent implements OnInit {

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

  deleteStyle(): void{
    this.customService.delete(this.custom.id!).subscribe(() => {
      this.customService.showMessage('Estilo excluído com sucesso!')
      this.router.navigate(['/dashboard'])
    })
  }

  cancel(): void {
    this.router.navigate(['/dashboard'])
  }

}
