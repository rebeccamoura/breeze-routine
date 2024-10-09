import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICreateEditWishData } from '../../interfaces/ICreateEditWishData';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FinancialService } from '../../services/financial.service';
import { DialogRef } from '@angular/cdk/dialog';
import { IWish } from '../../interfaces/IWish';

@Component({
  selector: 'app-create-edit-wish-modal',
  templateUrl: './create-edit-wish-modal.component.html',
  styleUrls: ['./create-edit-wish-modal.component.scss'],
})
export class CreateEditWishModalComponent {
  public wishForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public createEditWishData: ICreateEditWishData,
    private formBuilder: FormBuilder,
    private financialService: FinancialService,
    private dialogRef: DialogRef<CreateEditWishModalComponent>
  ) {
    this.wishForm = this.formBuilder.group({
      title: [''],
    });
  }

  public createWish(): void {
    this.financialService
      .createWish(this.wishForm.value)
      .subscribe((wish: IWish) => {
        this.dialogRef.close();
      });
  }

  public editWish() {}
}
