import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export interface ICard extends InMemoryDBEntity {
  name: string;
  description: string;
}
