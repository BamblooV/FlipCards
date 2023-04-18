import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlipCardListComponent } from './flip-card-list/flip-card-list.component';
import { FlipCardModule } from '../flip-card/flip-card.module';

@NgModule({
  declarations: [FlipCardListComponent],
  imports: [CommonModule, FlipCardModule],
  exports: [FlipCardListComponent],
})
export class FlipCardListModule {}
