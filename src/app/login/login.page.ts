import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit} from '@angular/core';
import { StorageService } from '../services/storage.service';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  [x: string]: any;

  listaUsuarios: Usuario[] = [];

  public formLogin: FormGroup;
  usuario: Usuario = new Usuario();


  constructor(private storageService: StorageService, private formBuilder: FormBuilder, private route: Router) {
    this.formLogin = this.formBuilder.group({
			// eslint-disable-next-line max-len
			email: [null, Validators.compose([Validators.required,Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')])],
			password: [null, Validators.compose([Validators.required, Validators.minLength(3)])]
		});
  }
  async buscarUsuarios(){
    this.listaUsuarios = await this.storageService.getAll();
  }

  ionViewDidEnter(){
    this.buscarUsuarios();
  }

  ngOnInit() {
  }
  async login(){
    // eslint-disable-next-line no-cond-assign
    if(this.usuario.email = 'true'){
      this.usuario.email = this.formLogin.value.email;
      this.usuario.senha = this.formLogin.value.senha;
      this.route.navigateByUrl('/home');
    }else{
      alert('Usuario não encontrado');
  }
}
}


