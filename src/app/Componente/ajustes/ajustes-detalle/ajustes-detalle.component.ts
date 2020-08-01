import { Component, OnInit } from '@angular/core';
import { AjustesService } from 'src/app/Servicios/ajustes.service';
import { Ajuste } from 'src/app/Entidades/ajustes';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ajustes-detalle',
  templateUrl: './ajustes-detalle.component.html',
  styleUrls: ['./ajustes-detalle.component.css']
})
export class AjustesDetalleComponent implements OnInit {
  id:number;
  name:string;
  value:string;
  ajustes:Ajuste;
  constructor(private ajusteserve:AjustesService,
             private router:Router,
           private activateroute:ActivatedRoute  ) { }

  async ngOnInit() {
    this.activateroute.queryParams.subscribe(parametro=>{
    this.id=parametro["id"];
    this.name=parametro["name"];
    this.value=parametro["value"]

    });
    this.ajustes = await this.ajusteserve.obtenerPorId(this.id); 
  }
  async  guardar(){
    var ajuste = new Ajuste();
    ajuste.name = this.name;
    ajuste.value = this.value;
    ajuste.id = this.id;
    await this.ajusteserve.editar(ajuste);
    this.router.navigate(["/ajustes-listar"]);
  }

  async eliminar (){
    await this.ajusteserve.eliminar(this.id) ; 
    this.router.navigate(["/ajustes-listar"]);  
  }

}
