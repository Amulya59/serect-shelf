import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerlandingComponent } from './sellerlanding.component';

describe('SellerlandingComponent', () => {
  let component: SellerlandingComponent;
  let fixture: ComponentFixture<SellerlandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SellerlandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerlandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
