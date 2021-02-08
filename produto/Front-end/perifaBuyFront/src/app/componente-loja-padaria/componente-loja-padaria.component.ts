import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriaProduto } from '../model/categoriaProduto';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-componente-loja-padaria',
  templateUrl: './componente-loja-padaria.component.html',
  styleUrls: ['./componente-loja-padaria.component.css']
})
export class ComponenteLojaPadariaComponent implements OnInit {

 
  categoria: CategoriaProduto= new CategoriaProduto()
  idCategoria: number 
  constructor(
    private categoriaService: CategoriaService,
    private rotaAtiva: ActivatedRoute //rota que está ativa 
  ) { }

  ngOnInit() {
  
    this.idCategoria= this.rotaAtiva.snapshot.params['id']
    this.findByIdCategoria(this.idCategoria)
  }

  findByIdCategoria(id: number){
    this.categoriaService.getByIdCategoria(id).subscribe((resp: CategoriaProduto ) =>{
      this.categoria = resp
    
    })
  }

}


