import { Injectable } from '@angular/core';
import { IFlipCardData } from 'src/shared/models/iflip-card';

const initData: IFlipCardData[] = [
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
  data: IFlipCardData[] = Array.from(initData);
  constructor() {}

  addCard(card: IFlipCardData) {
    this.data.push(card);
  }

  deleteCard(card: IFlipCardData) {
    this.data = this.data.filter((c) => c !== card);
  }

  getAllCards(): IFlipCardData[] {
    return this.data;
  }
}
