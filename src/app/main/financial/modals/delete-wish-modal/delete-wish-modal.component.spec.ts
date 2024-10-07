import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteWishModalComponent } from './delete-wish-modal.component';

describe('DeleteWishModalComponent', () => {
  let component: DeleteWishModalComponent;
  let fixture: ComponentFixture<DeleteWishModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteWishModalComponent]
    });
    fixture = TestBed.createComponent(DeleteWishModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
