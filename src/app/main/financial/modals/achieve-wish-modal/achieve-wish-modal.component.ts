import { Component, Inject } from '@angular/core';
import { FinancialService } from '../../services/financial.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IWish } from '../../interfaces/IWish';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-achieve-wish-modal',
  templateUrl: './achieve-wish-modal.component.html',
  styleUrls: ['./achieve-wish-modal.component.scss'],
})
export class AchieveWishModalComponent {
  constructor(
    private financialService: FinancialService,
    @Inject(MAT_DIALOG_DATA) public wishData: IWish,
    private dialogRef: DialogRef
  ) {}

  public achieveWish(): void {
    this.financialService
      .achieveWish(this.wishData.id ? this.wishData.id : '', true)
      .subscribe((updatedWish: IWish) => {
        this.dialogRef.close();
      });
  }
}
