import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-despublicar',
  templateUrl: './modal-despublicar.component.html',
  styleUrls: ['./modal-despublicar.component.scss']
})
export class ModalDespublicarComponent implements OnInit {

   constructor(
    public dialog: MatDialogRef<ModalDespublicarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
  }

}
