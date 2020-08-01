import { Component, OnInit } from '@angular/core';
import { CiudadService } from 'src/app/Servicios/ciudad.service';
import { Ciudad } from 'src/app/Entidades/ciudad';

@Component({
  selector: 'app-ciudad-listar',
  templateUrl: './ciudad-listar.component.html',
  styleUrls: ['./ciudad-listar.component.css']
})
export class CiudadListarComponent implements OnInit {
ciudades:Ciudad[];
  constructor(private ciudadserve:CiudadService) { }

 async ngOnInit() {
  this.ciudades = await this.ciudadserve.all();
  }

}
