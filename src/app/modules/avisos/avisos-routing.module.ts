import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvisoDetalleComponent } from './component/aviso-detalle/aviso-detalle.component';
import { AvisoEditarComponent } from './component/aviso-editar/aviso-editar.component';
import { AvisoNuevoComponent } from './component/aviso-nuevo/aviso-nuevo.component';
import { AvisosComponent } from './avisos.component';

const routes: Routes = [
  {
    path: '',
    component: AvisosComponent,
    children: [      
      { path: 'nuevo', component: AvisoNuevoComponent },
      { path: 'editar/:id', component: AvisoEditarComponent },
      {path: 'detalle/:id', component: AvisoDetalleComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvisosRoutingModule {}
