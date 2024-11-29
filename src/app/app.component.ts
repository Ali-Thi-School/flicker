import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('moveToTop', [
      state('center', style({
        alignItems: 'center',
        justifyContent: 'center',
      })),
      state('top', style({
        alignItems: 'center',
        justifyContent: 'flex-start',
      })),
      transition('center => top', animate('900ms ease-in')),
    ]),
  ],
})
export class AppComponent {
  title = 'flickersearchapp';
  topPosition: number = 0 ;
  leftPosition: number = 0 ;

  headerState = 'center';
  keyframe1: number = 20;
  keyframe2: number = 50;
  keyframe3: number  = 70;
  keyframe4: number = 100;
  searchData: Array<{
    src: string;
    title: string;
    description: string;
    id: string ; 
  }> = []

  onSearchData(searchData: Array<{
    src: string;
    title: string;
    description: string;
    id : string ; 
  }>) {
  
    this.searchData = searchData;

    
    console.log('Received search data in AppComponent:', this.searchData);
  }

  ngOnInit(): void {
  }

  generateRandomKeyframes(): void {
    this.keyframe1 = this.getRandomPosition(window.innerWidth);
    this.keyframe2 = this.getRandomPosition(window.innerHeight);
    this.keyframe3 = this.getRandomPosition(window.innerWidth);
    this.keyframe4 = this.getRandomPosition(window.innerHeight);
  }

  private getRandomPosition(max: number): number {
    return Math.floor(Math.random() * max);
  }

  onAnimationIteration(): void {
    this.generateRandomKeyframes();
  }

  moveHeaderToTop() {
    this.headerState = 'top';
  }
}
