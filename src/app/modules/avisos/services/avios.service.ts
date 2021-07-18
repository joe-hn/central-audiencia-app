import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfigService } from 'src/app/configs/app-config.service';

@Injectable({
  providedIn: 'root',
})
export class AviosService {
  url: string = '';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {
    this.url = AppConfigService.settings.urlApis.anuncio;
  }

  Page(CurrenPage: number, PageSize: number): Observable<any> {
    return this.http.get(
      this.url +
        '/Page?' +
        'CurrentPage=' +
        CurrenPage +
        '&' +
        'PageSize=' +
        PageSize
    );
  }

  Post(modelo: any): Observable<any> {
    return this.http.post<any>(
      this.url + '/AnuncioCreate',
      JSON.stringify(modelo),
      this.httpOptions
    );
  }

  GetId(id: string): Observable<any> {
    return this.http.get(this.url + '/GetId?' + 'id=' + id, this.httpOptions);
  }

  GetDate(year: number, month: number, day: number): Observable<any> {
    return this.http.get(
      this.url +
        '/GetDate?' +
        'year=' +
        year +
        '&month=' +
        month +
        '&day=' +
        day,
      this.httpOptions
    );
  }

  Put(modelo: any): Observable<any> {
    return this.http.put(
      this.url + '/AnuncioUpdate',
      JSON.stringify(modelo),
      this.httpOptions
    );
  }

  Delete(modelo: any): Observable<any> {
    return this.http.put(
      this.url + '/AnuncioDelete',
      JSON.stringify(modelo),
      this.httpOptions
    );
  }

  Publicar(modelo: any): Observable<any> {
    return this.http.post(
      this.url + '/PublicarAnuncio',
      JSON.stringify(modelo),
      this.httpOptions
    );
  }

  Despublicar(modelo: any): Observable<any> {
    return this.http.post(
      this.url + '/DespublicarAnuncio',
      JSON.stringify(modelo),
      this.httpOptions
    );
  }
}
