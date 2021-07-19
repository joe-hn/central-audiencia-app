import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { avisoDto } from '../../models/dto/avisoDto';
import { AviosService } from '../../services/avios.service';

@Component({
  selector: 'app-aviso-detalle',
  templateUrl: './aviso-detalle.component.html',
  styleUrls: ['./aviso-detalle.component.scss'],
})
export class AvisoDetalleComponent implements OnInit {
  modelo: avisoDto = new avisoDto();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: AviosService
  ) {}

  ngOnInit(): void {
    this.api.GetId(this.route.snapshot.params.id).subscribe(res => {
      this.modelo = res;
    });
  }

  onCancelar() {
    this.router.navigate(['anuncio']);
  }
}
