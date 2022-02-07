import { Custom } from './../../custom/custom.model';
import { CustomService } from './../../custom/custom.service';
import { Directive, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective implements OnInit {

 patterns!: Custom[];

 @HostBinding('style.backgroundColor') cardColor: string | undefined;

  constructor(private customService: CustomService) { }


  ngOnInit(): void {
    this.cardColor = 'black'
  }

}
