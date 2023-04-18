import { Component, OnInit } from '@angular/core';
// import { MockCardService } from 'src/shared/mocks/services/mock-card.service';
import { IFlipCard, IFlipCardData } from 'src/shared/models/iflip-card';
import { CardApiService } from 'src/shared/services/card-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  cards!: IFlipCard[];

  constructor(private cardService: CardApiService) {}

  addCard(card: IFlipCardData) {
    this.cardService.addCard(card).subscribe(() => {
      this.loadCards();
    });
  }

  ngOnInit(): void {
    this.loadCards();
  }

  loadCards(): void {
    this.cardService.getAllCards().subscribe((data) => (this.cards = data));
  }

  deleteCard(card: IFlipCard) {
    this.cardService.deleteCard(card).subscribe(() => {
      this.loadCards();
    });
  }
}
