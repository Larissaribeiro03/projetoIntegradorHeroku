import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-meu-perfil',
  templateUrl: './meu-perfil.component.html',
  styleUrls: ['./meu-perfil.component.css']
})
export class MeuPerfilComponent implements OnInit {

  user: Usuario = new Usuario
  tipoUsuario: string
  
  constructor(

  ) { }

  ngOnInit(): void {
  }

  editar() {

  }

  confirmarSenha(event: any) {

  }
}
