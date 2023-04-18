import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FlipCardAddModule } from './flip-card-add/flip-card-add.module';
import { FlipCardListModule } from './flip-card-list/flip-card-list.module';
import { MockCardService } from 'src/shared/mocks/services/mock-card.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FlipCardAddModule, FlipCardListModule],
  providers: [MockCardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
