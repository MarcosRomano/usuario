import { Component, OnInit } from '@angular/core';
import { Ajuste } from 'src/app/Entidades/ajustes';
import { AjustesService } from 'src/app/Servicios/ajustes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajustes-crear',
  templateUrl: './ajustes-crear.component.html',
  styleUrls: ['./ajustes-crear.component.css']
})
export class AjustesCrearComponent implements OnInit {
  id:Number;
  name:String;
  value:String;
  ajustes:Ajuste[];

  constructor(private serveajuste: AjustesService,
              private router: Router ) { }

  async guardar (){
    var ajustes = new Ajuste();
    ajustes.id = this.id;
    ajustes.name = this.name;
    ajustes.value = this.value;
    await this.serveajuste.guardar(ajustes); 
    this.router.navigate(["/ajustes-listar"])
  }
  
  ngOnInit() {
  }

}
