import { Component, OnInit } from '@angular/core';
import { AjustesService } from 'src/app/Servicios/ajustes.service';
import { Ajuste } from 'src/app/Entidades/ajustes';

@Component({
  selector: 'app-ajustes-listar',
  templateUrl: './ajustes-listar.component.html',
  styleUrls: ['./ajustes-listar.component.css']
})
export class AjustesListarComponent implements OnInit {

  constructor(private serveajuste:AjustesService) { }
  ajustes:Ajuste[];
   async ngOnInit() {
     this.ajustes = await this.serveajuste.ObtenerTodo(); 
  }

}
