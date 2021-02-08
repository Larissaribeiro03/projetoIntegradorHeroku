import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  nome: string
  constructor() { }

  ngOnInit(){
  }

  mostrarNome(){
    let ok:boolean = false

    if(environment.token != ""){
      ok= true
      this.nome = environment.nome
    }
    return ok
  }
}
