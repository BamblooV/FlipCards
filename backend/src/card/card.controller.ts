import { Controller, Get } from '@nestjs/common';
import { ICard } from './model/card.interface';
import {
  InMemoryDBEntityController,
  InMemoryDBService,
} from '@nestjs-addons/in-memory-db';

@Controller('cards')
export class CardController extends InMemoryDBEntityController<ICard> {
  constructor(private readonly cardService: InMemoryDBService<ICard>) {
    super(cardService);
    cardService.create({
      name: 'Столица Бразилии',
      description: 'Бразилиа',
    });
    cardService.create({
      name: 'Кофе или чай',
      description: 'Кофе',
    });
    cardService.create({
      name: "('b' + 'a' + + 'a' + 'a').toLowerCase()",
      description: 'banana',
    });
    cardService.create({
      name: '5 + 6',
      description: '11',
    });
    cardService.create({
      name: 'Angular',
      description: 'Angular',
    });
    cardService.create({
      name: '0.1 + 0.2 === 0.3',
      description: 'false',
    });
  }
}
