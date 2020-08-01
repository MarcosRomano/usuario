import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../Entidades/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient ) { }
   
  all():Promise<Usuario[]>{
    return  this.http.get<Usuario[]>
    ("http://antonella-001-site1.itempurl.com/api/user").toPromise();
  }
  
  guardar(usuarios:Usuario):Promise<void> {
    return this.http.post<void>
    ("http://antonella-001-site1.itempurl.com/api/user",usuarios).toPromise();
  }
  editar(usuarios:Usuario):Promise<void>{
    return this.http.put<void>
    ("http://antonella-001-site1.itempurl.com/api/user",usuarios).toPromise();
  }
  eliminar(id:number):Promise<void>{
    return this.http.delete<void>
    ("http://antonella-001-site1.itempurl.com/api/user/" + id ).toPromise();
  }
  obtenerPorId(id:number):Promise<Usuario>{
    return this.http.get<Usuario>
    ("http://antonella-001-site1.itempurl.com/api/user/" + id).toPromise();
  }
}

