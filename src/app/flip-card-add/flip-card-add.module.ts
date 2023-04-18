import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlipCardAddComponent } from './flip-card-add/flip-card-add.component';

@NgModule({
  declarations: [FlipCardAddComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [FlipCardAddComponent],
})
export class FlipCardAddModule {}
