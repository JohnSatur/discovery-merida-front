import { Component, Input } from '@angular/core';

@Component({
  selector: 'room-gallery-section',
  standalone: true,
  imports: [],
  templateUrl: './room-gallery-section.component.html',
  styles: ``
})
export class RoomGallerySectionComponent {
  @Input() pictures!: string[];
  @Input() pictureAlt!: string;
}