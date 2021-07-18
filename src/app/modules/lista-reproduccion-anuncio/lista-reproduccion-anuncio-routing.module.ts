import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaReproduccionAnuncioComponent } from './lista-reproduccion-anuncio.component';
import { ListaReproduccionAnuncioListaComponent } from './components/lista-reproduccion-anuncio-lista/lista-reproduccion-anuncio-lista.component';

const routes: Routes = [
  {
    path: '',
    component: ListaReproduccionAnuncioComponent,
    children: [{ path: 'lista', component: ListaReproduccionAnuncioListaComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaReproduccionAnuncioRoutingModule {}
