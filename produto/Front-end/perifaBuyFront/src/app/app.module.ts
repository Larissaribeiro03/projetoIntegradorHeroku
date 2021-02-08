
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { EntrarComponent } from './entrar/entrar.component';
import { SelecaoCategoriaComponent } from './selecao-categoria/selecao-categoria.component';
import { CadastroEmpresaComponent } from './cadastro-empresa/cadastro-empresa.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { FormaPagamentoComponent } from './forma-pagamento/forma-pagamento.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { InicioComponent } from './inicio/inicio.component';
import { DestaquesPrincipaisComponent } from './destaques-principais/destaques-principais.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ComponenteLojaFarmaciaComponent } from './componente-loja-farmacia/componente-loja-farmacia.component';
import { ContatoComponent } from './contato/contato.component';
import { MeuPerfilComponent } from './meu-perfil/meu-perfil.component';
import { ComponenteLojaPadariaComponent } from './componente-loja-padaria/componente-loja-padaria.component';
import { ServicosGeraisComponent } from './servicos-gerais/servicos-gerais.component';
import { MerceariasComponent } from './mercearias/mercearias.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { PadariasComponent } from './padarias/padarias.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    EntrarComponent,
    CadastroUsuarioComponent,
    SelecaoCategoriaComponent,
    FormaPagamentoComponent,
    CadastroEmpresaComponent,
    CarrinhoComponent,
    CadastroProdutoComponent,
    InicioComponent,
    DestaquesPrincipaisComponent,
    ComponenteLojaFarmaciaComponent,
    ContatoComponent,
    MeuPerfilComponent,
    ComponenteLojaPadariaComponent,
    ServicosGeraisComponent,
    MerceariasComponent,
    RestaurantesComponent,
    PadariasComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
      //
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
