import { Component, ElementRef, Inject, Renderer2 } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Details } from '../Types';

@Component({
  selector: 'app-picturedetails',
  templateUrl: './picturedetails.component.html',
  styleUrls: ['./picturedetails.component.scss']
})
export class PictureDetailsComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private renderer: Renderer2,
    private elRef: ElementRef
  ) { }
  
  details:Details = this.data.details ; 
}
