import { Module } from '@nestjs/common';
import { CardController } from './card.controller';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';

@Module({
  controllers: [CardController],
  imports: [InMemoryDBModule.forFeature('cards', {})],
})
export class CardModule {}
