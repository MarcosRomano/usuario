import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { promise } from 'protractor';
import { Ajuste } from '../Entidades/ajustes';

@Injectable({
  providedIn: 'root'
})
export class AjustesService {
  ruta:string = "http://antonella-001-site1.itempurl.com/api/Setting/";
  constructor(private http:HttpClient) { }

  ObtenerTodo():Promise<Ajuste[]>{
    return this.http.get<Ajuste[]>(this.ruta).toPromise();
  }
  guardar(ajustes:Ajuste):Promise<void>{
    return this.http.post<void>(this.ruta,ajustes).toPromise();
  }
  editar(ajustes:Ajuste):Promise<void>{
    return this.http.put<void>(this.ruta,ajustes).toPromise();
  }
  eliminar(id:number):Promise<void>{
    return this.http.delete<void>( this.ruta + id).toPromise();
  }
  obtenerPorId(id:number):Promise<Ajuste>{
    return this.http.get<Ajuste>(this.ruta + id).toPromise();
  }  
}



