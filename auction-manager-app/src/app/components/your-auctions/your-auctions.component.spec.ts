import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourAuctionsComponent } from './your-auctions.component';

describe('YourAuctionsComponent', () => {
  let component: YourAuctionsComponent;
  let fixture: ComponentFixture<YourAuctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourAuctionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourAuctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
