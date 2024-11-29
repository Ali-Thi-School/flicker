import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})

export class DisplayComponent {
  @Input() data: Array<{
    src: string;
    title: string;
    description: string;
    id : string
  }> = [];
  ngOnChanges() {
    console.log('Received data in DisplayComponent:', this.data);
  }
}