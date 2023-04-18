import { Injectable } from '@angular/core';
import { IFlipCard } from '../models/iflip-card';

@Injectable({
  providedIn: 'root',
})
export class FlipCardService {
  storageData = localStorage.getItem('flippedCards');
  flippedCardStore!: Set<string>;

  constructor() {
    this.flippedCardStore = this.storageData
      ? new Set(this.storageData.split(' '))
      : new Set();
  }

  showFront(card: IFlipCard): void {
    this.flippedCardStore.delete(card.id);
    this.saveState();
  }

  showAllFronts(): void {
    this.flippedCardStore.clear();
    this.saveState();
  }

  showBack(card: IFlipCard): void {
    this.flippedCardStore.add(card.id);
    this.saveState();
  }

  isBack(card: IFlipCard): boolean {
    return this.flippedCardStore.has(card.id);
  }

  saveState(): void {
    localStorage.setItem(
      'flippedCards',
      Array.from(this.flippedCardStore.values()).join(' ')
    );
  }
}
