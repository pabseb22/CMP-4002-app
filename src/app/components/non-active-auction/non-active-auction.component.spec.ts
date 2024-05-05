import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonActiveAuctionComponent } from './non-active-auction.component';

describe('NonActiveAuctionComponent', () => {
  let component: NonActiveAuctionComponent;
  let fixture: ComponentFixture<NonActiveAuctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonActiveAuctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonActiveAuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
