import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchieveWishModalComponent } from './achieve-wish-modal.component';

describe('AchieveWishModalComponent', () => {
  let component: AchieveWishModalComponent;
  let fixture: ComponentFixture<AchieveWishModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AchieveWishModalComponent]
    });
    fixture = TestBed.createComponent(AchieveWishModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
