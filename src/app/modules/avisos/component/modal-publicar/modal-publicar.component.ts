import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-publicar',
  templateUrl: './modal-publicar.component.html',
  styleUrls: ['./modal-publicar.component.scss'],
})
export class ModalPublicarComponent implements OnInit {
  constructor(
    public dialog: MatDialogRef<ModalPublicarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}
}
