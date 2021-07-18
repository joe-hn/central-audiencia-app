import { Injectable } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Injectable({
  providedIn: 'root',
})
export class MenuServiceService {
  menuItems: Array<NbMenuItem> = [
    { title: 'Anuncio', icon: 'people-outline', link: '/anuncio' },
  ];

  constructor() {}

  getMenu(): Array<NbMenuItem> {
    return this.menuItems;
  }
}
