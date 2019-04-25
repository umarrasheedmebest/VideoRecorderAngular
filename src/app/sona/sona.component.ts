import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-sona',
  templateUrl: './sona.component.html',
  styleUrls: ['./sona.component.sass']
})
export class SonaComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit() {
  }

}
