import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { CategoriaProduto } from '../model/categoriaProduto';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(
    private http:HttpClient
  ) { }
  
  token = {headers: new HttpHeaders().set('Authorization', environment.token)} //autorização será atraves do enviroment. token - LARISSA

  getByIdCategoria(id: number): Observable <CategoriaProduto>{ //metodo vindo do spring
    return this.http.get<CategoriaProduto>(`http://localhost:8080/pagina/getById/${id}`, this.token)
  }

}
