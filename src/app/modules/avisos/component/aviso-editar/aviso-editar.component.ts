import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { anuncioUpdateCommand } from '../../models/command/anuncioUpdateCommand';
import { tipoarchivo } from '../../models/dto/tipoArchivo';
import { tipoaviso } from '../../models/dto/tipoAviso';

import { AviosService } from '../../services/avios.service';

@Component({
  selector: 'app-aviso-editar',
  templateUrl: './aviso-editar.component.html',
  styleUrls: ['./aviso-editar.component.scss'],
})
export class AvisoEditarComponent implements OnInit {
  modelo: anuncioUpdateCommand = new anuncioUpdateCommand();

  tipoaviso = tipoaviso;
  tipoarchivo = tipoarchivo;

  dateInicio: Date = new Date();
  dateFinal: Date = new Date();
  dateMin: Date = new Date();
  dateMax: Date = new Date();

  vdatemayor: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: AviosService
  ) {}

  ngOnInit(): void {
    this.api.GetId(this.route.snapshot.params.id).subscribe((res) => {
      this.modelo.id = this.route.snapshot.params.id;
      this.modelo.duracion = res.duracion;
      this.modelo.fechaFinalizacion = res.fechaFinalizacion;
      this.modelo.fechaInicio = res.fechaInicio;
      this.modelo.nombreArchivo = res.nombreArchivo;
      this.modelo.tipoArchivo = res.tipoArchivo;
      this.modelo.tipoAviso = res.tipoAviso;
      this.modelo.titulo = res.titulo;
      this.modelo.url = res.url;

      this.dateInicio = new Date(this.modelo.fechaInicio);
      this.dateFinal = new Date(this.modelo.fechaFinalizacion);
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
    });
  }

  onGuardar() {
    if (this.modelo.titulo && this.modelo.tipoAviso && this.tipoarchivo) {
      let flag = true;

      if (this.dateInicio > this.dateFinal) {
        flag = false;
        this.vdatemayor = true;
      }

      if (flag) {
        this.modelo.fechaInicio = this.dateInicio;
        this.modelo.fechaFinalizacion = this.dateFinal;
        
        this.api.Put(this.modelo).subscribe((res) => {
          this.onCancelar();
        });
      }
    }
  }

  onCancelar() {
    this.router.navigate(['anuncio']);
  }
}
