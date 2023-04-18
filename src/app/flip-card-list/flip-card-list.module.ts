import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlipCardListComponent } from './flip-card-list/flip-card-list.component';
import { FlipCardModule } from '../flip-card/flip-card.module';
import { FlipCardService } from 'src/shared/services/flip-card.service';

@NgModule({
  declarations: [FlipCardListComponent],
  imports: [CommonModule, FlipCardModule],
  exports: [FlipCardListComponent],
  providers: [FlipCardService],
})
export class FlipCardListModule {}
