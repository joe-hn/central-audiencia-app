/* #region  IMPORT */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { anuncioCreateCommand } from '../../models/command/anuncioCreateCommand';
import { tipoarchivo } from '../../models/dto/tipoArchivo';
import { tipoaviso } from '../../models/dto/tipoAviso';
import { AviosService } from '../../services/avios.service';
/* #endregion */

@Component({
  selector: 'app-aviso-nuevo',
  templateUrl: './aviso-nuevo.component.html',
  styleUrls: ['./aviso-nuevo.component.scss'],
})
export class AvisoNuevoComponent implements OnInit {
  /* #region  DECLARCIONES */
  modelo: anuncioCreateCommand = new anuncioCreateCommand();
  tipoaviso = tipoaviso;
  tipoarchivo = tipoarchivo;

  dateInicio: Date = new Date();
  dateFinal: Date = new Date();
  dateMin: Date = new Date();
  dateMax: Date = new Date();

  vdatemayor: boolean = false;
  validation: boolean = false;
  /* #endregion */

  constructor(private router: Router, private api: AviosService) {}

  ngOnInit(): void {
    this.dateMin = new Date(
      this.dateMin.getFullYear(),
      this.dateMin.getMonth(),
      this.dateMin.getDate()
    );
    this.dateMax = new Date(
      this.dateMax.getFullYear() + 1,
      this.dateMax.getMonth(),
      this.dateMax.getDate()
    );
  }

  /* #region  METODOS */
  onGuardar() {
    this.validation = false;
    this.vdatemayor = false;

    if (this.modelo.titulo && this.modelo.tipoAviso && this.tipoarchivo) {
      let flag = true;

      this.modelo.fechaInicio = this.dateInicio;
      this.modelo.fechaFinalizacion = this.dateFinal;

      //QUITAR CUANDO SE INTEGRE EL MANEJO DE ARCHIVOS
      this.modelo.nombreArchivo = "--ARCHIVO--";
      this.modelo.duracion = 60;

      if (this.modelo.fechaInicio == this.modelo.fechaFinalizacion) {
      } else if (this.modelo.fechaInicio > this.modelo.fechaFinalizacion) {
        flag = false;
        this.vdatemayor = true;
      }

      if (flag) {
        this.api.Post(this.modelo).subscribe((res) => {
          this.onCancelar();
        });
      }
    } else {
      this.validation = true;
    }
  }

  onCancelar() {
    this.router.navigate(['anuncio']);
  }
  /* #endregion */
}
