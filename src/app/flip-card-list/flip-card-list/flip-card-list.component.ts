import { Component, Output, EventEmitter, Input } from '@angular/core';
import { MockCardService } from 'src/shared/mocks/services/mock-card.service';
import { IFlipCard } from 'src/shared/models/iflip-card';
import { FlipCardService } from 'src/shared/services/flip-card.service';

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

  constructor(private readonly flipService: FlipCardService) {}

  toggleCard(card: IFlipCard): void {
    if (this.flipService.isBack(card)) {
      this.flipService.showFront(card);
    } else {
      this.flipService.showBack(card);
    }
  }

  onDeleteClick(card: IFlipCard) {
    this.deleteCard.emit(card);
  }

  isFliped(card: IFlipCard) {
    return this.flipService.isBack(card);
  }

  showAllFronts() {
    this.flipService.showAllFronts();
  }
}
