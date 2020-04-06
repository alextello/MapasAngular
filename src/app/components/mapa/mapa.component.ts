import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  lat = 51.54954;
  lng = 7.802484;
  constructor() {
  }

  ngOnInit(): void {
  }

}
