import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlipCardComponent } from './flip-card/flip-card.component';
import { DebounceClickDirective } from './debounce-click.directive';



@NgModule({
  declarations: [
    FlipCardComponent,
    DebounceClickDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FlipCardComponent,
    DebounceClickDirective
  ]
})
export class FlipCardModule { }
