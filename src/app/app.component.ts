import { Component, OnInit } from '@angular/core';
import { MockCardService } from 'src/shared/mocks/services/mock-card.service';
import { IFlipCard } from 'src/shared/models/iflip-card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  cards!: IFlipCard[];

  constructor(private cardService: MockCardService) {}

  addCard(card: IFlipCard) {
    this.cardService.addCard(card);
    this.loadCards();
  }

  ngOnInit(): void {
    this.loadCards();
  }

  loadCards(): void {
    this.cards = this.cardService.getAllCards();
  }

  deleteCard(card: IFlipCard) {
    this.cardService.deleteCard(card);
    this.loadCards();
  }
}
