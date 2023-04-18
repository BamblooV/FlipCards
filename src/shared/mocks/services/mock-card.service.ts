import { Injectable } from '@angular/core';
import { IFlipCard } from 'src/shared/models/iflip-card';

const initData: IFlipCard[] = [
  {
    name: 'Город',
    description: 'Москва',
  },
  {
    name: 'Напиток',
    description: 'Чай',
  },
  {
    name: 'Понятие',
    description: 'Ангуляр',
  },
];

@Injectable({
  providedIn: 'root',
})
export class MockCardService {
  data: IFlipCard[] = Array.from(initData);
  constructor() {}

  addCard(card: IFlipCard) {
    this.data.push(card);
  }

  deleteCard(card: IFlipCard) {
    this.data = this.data.filter((c) => c !== card);
  }

  getAllCards(): IFlipCard[] {
    return this.data;
  }
}
