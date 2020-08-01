import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Entidades/usuario';
import { UsuarioService } from 'src/app/Servicios/usuario.service';


@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {
usuarios:Usuario[];
  
  constructor(private usuarioserve:UsuarioService) { }

 async ngOnInit() {
    
    this.usuarios= await this.usuarioserve.all();
  }

}
