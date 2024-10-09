import { Component, Inject } from '@angular/core';
import { FinancialService } from '../../services/financial.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IWish } from '../../interfaces/IWish';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-delete-wish-modal',
  templateUrl: './delete-wish-modal.component.html',
  styleUrls: ['./delete-wish-modal.component.scss'],
})
export class DeleteWishModalComponent {
  constructor(
    private financialService: FinancialService,
    @Inject(MAT_DIALOG_DATA) public wishData: any,
    private dialogRef: DialogRef<DeleteWishModalComponent>
  ) {}

  public deleteWish() {
    this.financialService
      .deleteWish(this.wishData.wishId)
      .subscribe((wish: IWish) => {
        this.dialogRef.close();
      });
  }
}
