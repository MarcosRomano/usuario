import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ciudad } from '../Entidades/ciudad';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  constructor(private http:HttpClient) { }

  all():Promise<Ciudad[]>{
  return this.http.get<Ciudad[]>("http://antonella-001-site1.itempurl.com/api/city").toPromise();
  }
  guardar(ciudad:Ciudad) :Promise <void> {
  return this.http.post<void>("http://antonella-001-site1.itempurl.com/api/city",ciudad).toPromise();
  } 
  editar(ciudad:Ciudad):Promise<void>{
    return this.http.put<void>("http://antonella-001-site1.itempurl.com/api/city",ciudad).toPromise();
  }
  eliminar(id:number):Promise<void>{
    return this.http.delete<void>("http://antonella-001-site1.itempurl.com/api/city/" + id).toPromise();
  }
  obtenerPorId(id:number):Promise<Ciudad>{
    return this.http.get<Ciudad>("http://antonella-001-site1.itempurl.com/api/city/" + id).toPromise();
  }  
}
