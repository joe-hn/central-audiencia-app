import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-validacion',
  templateUrl: './modal-validacion.component.html',
  styleUrls: ['./modal-validacion.component.scss']
})
export class ModalValidacionComponent implements OnInit {

  constructor(
    public dialog: MatDialogRef<ModalValidacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

}
