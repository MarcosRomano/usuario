import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/Servicios/usuario.service';
import { Usuario } from 'src/app/Entidades/usuario';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit {
  id:number;
  email:string;
  password:string;
  usuarios:Usuario;
  
  constructor(private usuarioserve:UsuarioService,
              private router:Router,
              private activateroute:ActivatedRoute ) { }

  async ngOnInit() {
    this.activateroute.queryParams.subscribe(parametro=>{
      this.id=parametro["id"];
      this.email=parametro["email"];
      this.password=parametro["password"]

    });
    this.usuarios = await this.usuarioserve.obtenerPorId(this.id); 
  }

  async  guardar(){
    var usuario = new Usuario();
    usuario.email = this.email;
    usuario.password = this.password;
    usuario.id = this.id;
    await this.usuarioserve.editar(usuario);
    this.router.navigate(["/listar-usuario"]);
  }

  async borrar (){
    await this.usuarioserve.eliminar(this.id)  
    this.router.navigate(["/listar-usuario"]);  
  }

}
