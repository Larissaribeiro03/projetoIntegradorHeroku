import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriaProduto } from '../model/categoriaProduto';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-componente-loja-farmacia',
  templateUrl: './componente-loja-farmacia.component.html',
  styleUrls: ['./componente-loja-farmacia.component.css']
})
export class ComponenteLojaFarmaciaComponent implements OnInit {

  categoria: CategoriaProduto= new CategoriaProduto()
  idCategoria: number 
  constructor(
    private categoriaService: CategoriaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  
    this.idCategoria= this.route.snapshot.params['id']
    this.findByIdCategoria(this.idCategoria)
  }

  findByIdCategoria(id: number){
    this.categoriaService.getByIdCategoria(id).subscribe((resp: CategoriaProduto ) =>{
      this.categoria = resp
    
    })
  }

}
