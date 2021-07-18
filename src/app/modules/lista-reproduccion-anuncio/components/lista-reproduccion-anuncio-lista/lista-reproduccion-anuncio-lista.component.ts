import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NbComponentStatus, NbToastrService } from '@nebular/theme';
import { ListaReproduccionAnuncioService } from '../../services/lista-reproduccion-anuncio.service';

@Component({
  selector: 'app-lista-reproduccion-anuncio-lista',
  templateUrl: './lista-reproduccion-anuncio-lista.component.html',
  styleUrls: ['./lista-reproduccion-anuncio-lista.component.scss']
})
export class ListaReproduccionAnuncioListaComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'titulo',
    'duracion',
    'tipoVideo',        
  ];

  dataSource = new MatTableDataSource();

  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(
    private api: ListaReproduccionAnuncioService,
    private toast: NbToastrService
  ) {}

  ngOnInit(): void {
    this.GET();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  GET() {
    this.api.Get().subscribe(
      (res) => {
        this.dataSource.data = res;        
      },
      (err) => {
        this.showToast('danger', `Error al consultar. ${err}`, 'Error');
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  showToast(status: NbComponentStatus, contenido: string, titulo: string) {
    this.toast.show(contenido, titulo, { status });
  }

}
