import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../classes/marcador.class';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  marcadores: Marcador[] = [];
  lat = 51.54954;
  lng = 7.802484;
  constructor() {
    const nuevoMarcador = new Marcador(51.54954, 7.802484);
    this.marcadores.push(nuevoMarcador);
  }

  ngOnInit(): void {
  }
  agregarMarcador(evento) {
    const coords: {lat: number, lng: number} = evento.coords;
    const nuevoMarcador = new Marcador(coords.lat, coords.lng);
    this.marcadores.push(nuevoMarcador);
  }

}
