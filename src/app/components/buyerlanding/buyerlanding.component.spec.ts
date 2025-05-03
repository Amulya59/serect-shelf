import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerlandingComponent } from './buyerlanding.component';

describe('BuyerlandingComponent', () => {
  let component: BuyerlandingComponent;
  let fixture: ComponentFixture<BuyerlandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuyerlandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyerlandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
