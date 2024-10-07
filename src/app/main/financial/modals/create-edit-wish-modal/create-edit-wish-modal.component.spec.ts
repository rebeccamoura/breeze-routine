import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditWishModalComponent } from './create-edit-wish-modal.component';

describe('CreateEditWishModalComponent', () => {
  let component: CreateEditWishModalComponent;
  let fixture: ComponentFixture<CreateEditWishModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEditWishModalComponent]
    });
    fixture = TestBed.createComponent(CreateEditWishModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
