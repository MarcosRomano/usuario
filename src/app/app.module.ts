import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearUsuarioComponent } from './Componente/usuario/crear-usuario/crear-usuario.component';
import { ListarUsuarioComponent } from './Componente/usuario/listar-usuario/listar-usuario.component';
import {HttpClientModule} from '@angular/common/http';
import { CiudadListarComponent } from './Componente/ciudad/ciudad-listar/ciudad-listar.component';
import { CiudadCrearComponent } from './Componente/ciudad/ciudad-crear/ciudad-crear.component';
import { CiudadDetalleComponent } from './Componente/ciudad/ciudad-detalle/ciudad-detalle.component';
import { DetalleUsuarioComponent } from './Componente/usuario/detalle-usuario/detalle-usuario.component';
import { AjustesCrearComponent } from './Componente/ajustes/ajustes-crear/ajustes-crear.component';
import { AjustesListarComponent } from './Componente/ajustes/ajustes-listar/ajustes-listar.component';
import { AjustesDetalleComponent } from './Componente/ajustes/ajustes-detalle/ajustes-detalle.component';
import {ReactiveFormsModule} from '@angular/forms';
import { NgClassComponent } from './Componente/ng-class/ng-class.component'
@NgModule({
  declarations: [
    AppComponent,
    CrearUsuarioComponent,
    ListarUsuarioComponent,
    CiudadListarComponent,
    CiudadCrearComponent,
    CiudadDetalleComponent,
    DetalleUsuarioComponent,
    AjustesCrearComponent,
    AjustesListarComponent,
    AjustesDetalleComponent,
    NgClassComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
