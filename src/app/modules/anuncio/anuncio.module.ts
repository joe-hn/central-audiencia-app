import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnuncioRoutingModule } from './anuncio-routing.module';
import { AnuncioComponent } from './anuncio.component';
import { NebularModule } from 'src/app/@nebular/nebular.module';
import { AngularMaterialModule } from 'src/app/@angular-material/angular-material.module';
import { NgBootstrapModule } from 'src/app/@ng-bootstrap/ng-bootstrap.module';
import { AvisosModule } from '../avisos/avisos.module';
import { ListaReproduccionAnuncioModule } from '../lista-reproduccion-anuncio/lista-reproduccion-anuncio.module';


@NgModule({
  declarations: [
    AnuncioComponent
  ],
  imports: [
    NebularModule,
    AngularMaterialModule,    
    NgBootstrapModule,
    CommonModule,
    AnuncioRoutingModule,
    AvisosModule,
    ListaReproduccionAnuncioModule
  ]
})
export class AnuncioModule { }
