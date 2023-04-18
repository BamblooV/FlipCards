import { Component, Output, EventEmitter, Input } from '@angular/core';
import { MockCardService } from 'src/shared/mocks/services/mock-card.service';
import { IFlipCard } from 'src/shared/models/iflip-card';

@Component({
  selector: 'app-flip-card-list',
  templateUrl: './flip-card-list.component.html',
  styleUrls: ['./flip-card-list.component.css'],
})
export class FlipCardListComponent {
  @Input()
  cards!: IFlipCard[];

  @Output()
  deleteCard = new EventEmitter<IFlipCard>();

  selectedCard: IFlipCard | undefined;

  toggleCard(card: IFlipCard): void {
    this.selectedCard = this.selectedCard === card ? undefined : card;
  }

  onDeleteClick(card: IFlipCard) {
    this.deleteCard.emit(card);
  }
}
