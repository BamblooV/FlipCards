import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipCardAddComponent } from './flip-card-add.component';

describe('FlipCardAddComponent', () => {
  let component: FlipCardAddComponent;
  let fixture: ComponentFixture<FlipCardAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipCardAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlipCardAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
