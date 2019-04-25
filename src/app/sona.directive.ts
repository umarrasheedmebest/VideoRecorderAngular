import { Directive, HostListener } from '@angular/core';
import {Location} from '@angular/common';

@Directive({
  selector: '[appSona]'
})
export class SonaDirective {
  constructor(private _location: Location) 
  {}
  
  @HostListener('click', ['$event']) onClick($event) {
    this._location.back();
  }

}
