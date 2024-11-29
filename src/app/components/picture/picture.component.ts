import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { getPhotoDetails } from 'src/app/flickrAPI';
import { PictureDetailsComponent } from 'src/app/picturedetails/picturedetails.component';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss'],
})
export class PictureComponent {
  @Input() image: {
    src: string;
    title: string;
    description: string;
    id : string ; 
  } = {
    src: '',
    title: '',
    description: '',
    id: ''
  };
  constructor(public dialog: MatDialog) {}
  seeMore() {
    getPhotoDetails(this.image.id).then(details => {
      this.dialog.open(PictureDetailsComponent, {
        data: {
          details: details, 
          image: this.image ,
          comments: details.comments
        }
      });
    }).catch(error => {
      console.error('Error fetching photo details:', error);
      
    });
  }
  print(){
    alert(this.image.src) ;
    getPhotoDetails(this.image.id) ; 
  }
}


