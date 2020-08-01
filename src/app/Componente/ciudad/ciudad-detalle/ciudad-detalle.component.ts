import { Component, OnInit } from '@angular/core';
import { CiudadService } from 'src/app/Servicios/ciudad.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Ciudad } from 'src/app/Entidades/ciudad';

@Component({
  selector: 'app-ciudad-detalle',
  templateUrl: './ciudad-detalle.component.html',
  styleUrls: ['./ciudad-detalle.component.css']
})
export class CiudadDetalleComponent implements OnInit {
id:number;
name:string;
ciudad:Ciudad;

  constructor(private ciudadservice:CiudadService,
              private router:Router,
              private activateRoute:ActivatedRoute  ) { }

  async ngOnInit() {
    this.activateRoute.queryParams.subscribe(parametro=>{
      this.id=parametro["id"];
      this.name=parametro["name"];
    });
    this.ciudad = await this.ciudadservice.obtenerPorId(this.id);
  }
  async  guardar(){
    var ciudad= new Ciudad();
    ciudad.id=this.id;
    ciudad.name=this.name;
    await this.ciudadservice.editar(ciudad);  
    this.router.navigate(["/ciudad-listar"]);
  }
  async eliminar (){
    await this.ciudadservice.eliminar(this.id)  
    this.router.navigate(["/ciudad-listar"]);
  }
  
}
