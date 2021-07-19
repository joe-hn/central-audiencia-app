import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'anuncio',
    loadChildren: () =>
      import('./modules/anuncio/anuncio.module').then((m) => m.AnuncioModule),
  },
  {
    path: 'aviso',
    loadChildren: () =>
      import('./modules/avisos/avisos.module').then((m) => m.AvisosModule),
  },
  {
    path: 'lista-reproduccion-anuncio',
    loadChildren: () =>
      import(
        './modules/lista-reproduccion-anuncio/lista-reproduccion-anuncio.module'
      ).then((m) => m.ListaReproduccionAnuncioModule),
  },
  {
    path: '',
    redirectTo: 'anuncio',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
