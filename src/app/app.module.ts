import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbToastrModule,
  NbMenuModule,
  NbSidebarService,
  NbSidebarModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './component/shared/shared.module';
import { AppConfigService } from './configs/app-config.service';
import { NebularModule } from './@nebular/nebular.module';
import { AngularMaterialModule } from './@angular-material/angular-material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListaReproduccionAnuncioComponent } from './modules/lista-reproduccion-anuncio/lista-reproduccion-anuncio.component';

export function configProvider(cs: AppConfigService) {
  return () => cs.load();
}

@NgModule({
  declarations: [
    AppComponent,
    ListaReproduccionAnuncioComponent,        
  ],
  imports: [
    NebularModule,
    AngularMaterialModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbEvaIconsModule,
    ReactiveFormsModule,
    NbToastrModule.forRoot(),
    SharedModule,
    NgbModule,
    FormsModule    
  ],
  providers: [
    NbSidebarService,
    AppConfigService,
    {
      deps: [AppConfigService],
      multi: true,
      provide: APP_INITIALIZER,
      useFactory: configProvider,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
