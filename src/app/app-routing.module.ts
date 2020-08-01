import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearUsuarioComponent } from './Componente/usuario/crear-usuario/crear-usuario.component';
import { ListarUsuarioComponent } from './Componente/usuario/listar-usuario/listar-usuario.component';
import { CiudadCrearComponent } from './Componente/ciudad/ciudad-crear/ciudad-crear.component';
import { CiudadListarComponent } from './Componente/ciudad/ciudad-listar/ciudad-listar.component';
import { CiudadDetalleComponent } from './Componente/ciudad/ciudad-detalle/ciudad-detalle.component';
import { DetalleUsuarioComponent } from './Componente/usuario/detalle-usuario/detalle-usuario.component';
import { AjustesCrearComponent } from './Componente/ajustes/ajustes-crear/ajustes-crear.component';
import { AjustesListarComponent } from './Componente/ajustes/ajustes-listar/ajustes-listar.component';
import { AjustesDetalleComponent } from './Componente/ajustes/ajustes-detalle/ajustes-detalle.component';


const routes: Routes = [
    { path:"crear-usuario",component:CrearUsuarioComponent},
    { path:"listar-usuario",component:ListarUsuarioComponent},
    { path:"ciudad-crear", component:CiudadCrearComponent},
    { path:"ciudad-listar", component:CiudadListarComponent}, 
    { path:"ciudad-detalle",component:CiudadDetalleComponent},
    { path:"detalle-usuario", component:DetalleUsuarioComponent},
    { path:"ajustes-crear",component:AjustesCrearComponent },
    { path:"ajustes-listar",component:AjustesListarComponent },
    { path:"ajustes-detalle",component:AjustesDetalleComponent },

  ];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
