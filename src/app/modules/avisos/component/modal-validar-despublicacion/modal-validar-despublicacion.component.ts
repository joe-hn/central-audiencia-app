import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-validar-despublicacion',
  templateUrl: './modal-validar-despublicacion.component.html',
  styleUrls: ['./modal-validar-despublicacion.component.scss']
})
export class ModalValidarDespublicacionComponent implements OnInit {

  constructor(
    public dialog: MatDialogRef<ModalValidarDespublicacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

}
