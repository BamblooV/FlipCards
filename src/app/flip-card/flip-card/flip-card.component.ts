import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IFlipCard } from 'src/shared/models/iflip-card';

@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.css'],
})
export class FlipCardComponent {
  @Input()
  card!: IFlipCard;

  @Input()
  opened: boolean = false;

  @Output()
  cardClicked = new EventEmitter<IFlipCard>();

  @Output()
  cardDelete = new EventEmitter<IFlipCard>();

  flipCard(): void {
    this.cardClicked.emit(this.card);
  }

  deleteCard(): void {
    this.cardDelete.emit(this.card);
  }
}
