import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipCardListComponent } from './flip-card-list.component';

describe('FlipCardListComponent', () => {
  let component: FlipCardListComponent;
  let fixture: ComponentFixture<FlipCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipCardListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlipCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
