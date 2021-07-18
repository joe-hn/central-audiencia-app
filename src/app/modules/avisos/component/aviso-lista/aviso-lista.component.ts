/* #region  import */
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NbComponentStatus, NbToastrService } from '@nebular/theme';

import { Page } from 'src/app/model/page';
import { ModalEliminarComponent } from 'src/app/component/shared/modal-eliminar/modal-eliminar.component';
import { ModalDespublicarComponent } from '../modal-despublicar/modal-despublicar.component';
import { ModalPublicarComponent } from '../modal-publicar/modal-publicar.component';
import { ModalValidacionComponent } from '../modal-validacion/modal-validacion.component';
import { ModalValidarDespublicacionComponent } from '../modal-validar-despublicacion/modal-validar-despublicacion.component';
import { AnuncioDespublicarCommand } from '../../models/command/AnuncioDespublicarCommand';
import { AnuncioPublicarCommand } from '../../models/command/AnuncioPublicarCommand';
import { anundioDeleteCommand } from '../../models/command/anundioDeleteCommand';

import { AviosService } from '../../services/avios.service';

/* #endregion */

@Component({
  selector: 'app-aviso-lista',
  templateUrl: './aviso-lista.component.html',
  styleUrls: ['./aviso-lista.component.scss'],
})
export class AvisoListaComponent implements OnInit, AfterViewInit {
  /* #region  Declaración de variables */
  displayedColumns: string[] = [
    'titulo',
    'fechaInicio',
    'fechaFinalizacion',
    'actions',
  ];

  page: Page = new Page();
  dataSource = new MatTableDataSource();
  delete: anundioDeleteCommand = new anundioDeleteCommand();
  publicar: AnuncioPublicarCommand = new AnuncioPublicarCommand();
  despublicar: AnuncioDespublicarCommand = new AnuncioDespublicarCommand();
  currenpage: number = 0;
  vDate: Date = new Date();

  @ViewChild(MatSort)
  sort!: MatSort;
  /* #endregion */

  /* #region  Constructor */
  constructor(
    private api: AviosService,    
    private toast: NbToastrService,
    private dialog: MatDialog
  ) {}
  /* #endregion */

  /* #region  Metodos */
  GET(currentPage: number) {
    this.currenpage = currentPage;
    this.api.Page(currentPage, 10).subscribe(
      (res) => {
        this.page = res;
        this.page.totalPages = this.page.totalPages * this.page.pageSize;
        this.dataSource.data = res.data;
      },
      (err) => {
        this.showToast('danger', `Error al consultar. ${err}`, 'Error');
      }
    );
  }
  /* #endregion */

  /* #region  Eventos */
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  onPageChange(event: number) {
    this.GET(event);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  showToast(status: NbComponentStatus, contenido: string, titulo: string) {
    this.toast.show(contenido, titulo, { status });
  }

  /* #region  Modales */
  onEliminar(valor: any) {
    if (valor.publicado) {
      const dialogRef = this.dialog.open(ModalValidarDespublicacionComponent, {
        data: { nombre: valor.titulo },
      });

      dialogRef.afterClosed().subscribe(res => {});

    } else {
      const dialogRef = this.dialog.open(ModalEliminarComponent, {
        data: { nombre: valor.titulo },
      });

      dialogRef.afterClosed().subscribe((res) => {
        if (res) {
          this.delete.id = valor.id;
          this.api.Delete(this.delete).subscribe((res) => {
            this.GET(this.currenpage);
          });
        }
      });
    }
  }

  onPublicar(valor: any) {
    let dd: Date = new Date(
      this.vDate.getFullYear(),
      this.vDate.getMonth(),
      this.vDate.getDate()
    );

    if (
      dd >= new Date(valor.fechaInicio) &&
      dd <= new Date(valor.fechaFinalizacion)
    ) {
      const dialogRef = this.dialog.open(ModalPublicarComponent, {
        data: { nombre: valor.titulo },
      });

      dialogRef.afterClosed().subscribe((res) => {
        if (res) {
          this.publicar.id = valor.id;
          this.api.Publicar(this.publicar).subscribe((res) => {
            this.GET(this.currenpage);
          });
        }
      });
    } else {
      const dialogRef = this.dialog.open(ModalValidacionComponent, {
        data: { nombre: valor.titulo },
      });

      dialogRef.afterClosed().subscribe((res) => {});
    }
  }

  onDespublicar(valor: any) {
    const dialogRef = this.dialog.open(ModalDespublicarComponent, {
      data: { nombre: valor.titulo },
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.despublicar.id = valor.id;

        this.api.Despublicar(this.despublicar).subscribe((res) => {
          this.GET(this.currenpage);
        });
      }
    });
  }
  /* #endregion */
  /* #endregion */
}
