import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvisosRoutingModule } from './avisos-routing.module';
import { AvisoListaComponent } from './component/aviso-lista/aviso-lista.component';
import { AvisoNuevoComponent } from './component/aviso-nuevo/aviso-nuevo.component';
import { AvisoEditarComponent } from './component/aviso-editar/aviso-editar.component';
import { AvisosComponent } from './avisos.component';

import { NbDatepickerModule, NbDialogModule } from '@nebular/theme';
import { AvisoDetalleComponent } from './component/aviso-detalle/aviso-detalle.component';
import { ModalPublicarComponent } from './component/modal-publicar/modal-publicar.component';
import { ModalValidacionComponent } from './component/modal-validacion/modal-validacion.component';
import { ModalDespublicarComponent } from './component/modal-despublicar/modal-despublicar.component';
import { ModalValidarDespublicacionComponent } from './component/modal-validar-despublicacion/modal-validar-despublicacion.component';
import { NebularModule } from 'src/app/@nebular/nebular.module';
import { AngularMaterialModule } from 'src/app/@angular-material/angular-material.module';
import { NgBootstrapModule } from 'src/app/@ng-bootstrap/ng-bootstrap.module';
import { SharedModule } from 'src/app/component/shared/shared.module';
import { ListaReproduccionAnuncioModule } from '../lista-reproduccion-anuncio/lista-reproduccion-anuncio.module';

@NgModule({
  declarations: [
    AvisoListaComponent,
    AvisoNuevoComponent,
    AvisoEditarComponent,
    AvisosComponent,
    AvisoDetalleComponent,
    ModalPublicarComponent,
    ModalValidacionComponent,
    ModalDespublicarComponent,
    ModalValidarDespublicacionComponent,
  ],
  imports: [
    NebularModule,
    AngularMaterialModule,
    NgBootstrapModule,
    CommonModule,
    AvisosRoutingModule,
    SharedModule,
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    ListaReproduccionAnuncioModule,
  ],
  exports: [AvisoListaComponent],
})
export class AvisosModule {}
