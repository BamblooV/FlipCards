import {
  Directive,
  OnInit,
  HostListener,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Subscription } from 'rxjs/internal/Subscription';
import { debounceTime, throttleTime } from 'rxjs/operators';

@Directive({
  selector: '[appDebounceClick]',
})
export class DebounceClickDirective implements OnInit {
  @Input() debounceTime: number = 800;
  @Output() debounceClick = new EventEmitter();
  private clicks = new Subject();
  private subscription!: Subscription;

  constructor() {}

  ngOnInit(): void {
    this.subscription = this.clicks
      .pipe(throttleTime(this.debounceTime))
      .subscribe((e) => this.debounceClick.emit(e));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  @HostListener('click', ['$event'])
  clickEvent(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.clicks.next(event);
  }
}
