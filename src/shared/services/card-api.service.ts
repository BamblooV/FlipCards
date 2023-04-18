import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IFlipCard, IFlipCardData } from '../models/iflip-card';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class CardApiService {
  baseUrl = 'http://localhost:3000/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private readonly http: HttpClient) {}

  getAllCards(): Observable<IFlipCard[]> {
    return this.http.get<IFlipCard[]>(this.baseUrl + 'cards');
  }

  deleteCard(card: IFlipCard): Observable<IFlipCard> {
    return this.http.delete<IFlipCard>(this.baseUrl + 'cards/' + card.id);
  }

  addCard(card: IFlipCardData): Observable<IFlipCard> {
    return this.http.post<IFlipCard>(
      this.baseUrl + 'cards',
      card,
      this.httpOptions
    );
  }
}
