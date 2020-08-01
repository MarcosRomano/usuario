import { Component, OnInit } from '@angular/core';
import { Ciudad } from 'src/app/Entidades/ciudad';
import { CiudadService } from 'src/app/Servicios/ciudad.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-ciudad-crear',
  templateUrl: './ciudad-crear.component.html',
  styleUrls: ['./ciudad-crear.component.css']
})
export class CiudadCrearComponent implements OnInit {
  ciudad:Ciudad[]=[];
  form:FormGroup;
  enviado: boolean;
  
  constructor(private ciudadserve:CiudadService,
    private router: Router,
    private fb: FormBuilder){
      this.form = fb.group({
        name: ['', [Validators.required, Validators.maxLength(10),Validators.minLength(4)]],
      })
  }

  get f() { return this.form.controls; }

  async guardar(){
    this.enviado = true;
    if (this.form.valid) {
      var ciudad = <Ciudad>this.form.value;
      await this.ciudadserve.guardar(ciudad);
      this.router.navigate(['/ciudad-listar'])
    }
  }


  ngOnInit() {
  }

}
