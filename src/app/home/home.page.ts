import { StorageService } from './../services/storage.service';
import { Usuario } from './../models/usuario';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    listaUsuarios: Usuario[] = [];

  constructor(private storageService: StorageService) {}

  async buscarUsuarios(){
    this.listaUsuarios = await this.storageService.getAll();
  }
  ionViewDidEnter(){
    this.buscarUsuarios();
  }
  async excluirCadastro(email: string){
    await this.storageService.remove(email);
    this.buscarUsuarios();
  }
}
