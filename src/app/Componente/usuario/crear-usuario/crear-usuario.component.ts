import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Entidades/usuario';
import { UsuarioService } from 'src/app/Servicios/usuario.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'
@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  usuario:Usuario[]=[];
  form:FormGroup;
  enviado: boolean;

  constructor(private usuarioServe:UsuarioService,
      private router: Router,
      private fb: FormBuilder) {
        this.form = fb.group({
          password: ['', [Validators.required]],
          email: ['', [Validators.required, Validators.email,Validators.maxLength(20),Validators.minLength(5),Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
        })
  }

  get f() { return this.form.controls; }
  
  async guardar(){
    this.enviado = true;
    if (this.form.valid) {
      var usuario = <Usuario>this.form.value;
      await this.usuarioServe.guardar(usuario);
      this.router.navigate(['/listar-usuario'])
    }
  }

  

 async ngOnInit() {
   
  }

}
