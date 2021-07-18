import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaReproduccionAnuncioRoutingModule } from './lista-reproduccion-anuncio-routing.module';
import { NebularModule } from 'src/app/@nebular/nebular.module';
import { AngularMaterialModule } from 'src/app/@angular-material/angular-material.module';
import { SharedModule } from 'src/app/component/shared/shared.module';
import { ListaReproduccionAnuncioListaComponent } from './components/lista-reproduccion-anuncio-lista/lista-reproduccion-anuncio-lista.component';


@NgModule({
  declarations: [ ListaReproduccionAnuncioListaComponent],
  imports: [
    CommonModule,
    NebularModule,
    AngularMaterialModule,
    ListaReproduccionAnuncioRoutingModule,
    SharedModule,
  ],
  exports: [ListaReproduccionAnuncioListaComponent],
})
export class ListaReproduccionAnuncioModule {}
