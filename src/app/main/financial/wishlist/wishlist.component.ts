import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteWishModalComponent } from '../modals/delete-wish-modal/delete-wish-modal.component';
import { AchieveWishModalComponent } from '../modals/achieve-wish-modal/achieve-wish-modal.component';
import { CreateEditWishModalComponent } from '../modals/create-edit-wish-modal/create-edit-wish-modal.component';
import { FinancialService } from '../services/financial.service';
import { IWish } from '../interfaces/IWish';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent {
  public wishes: IWish[] = [];

  constructor(
    private dialog: MatDialog,
    private financialService: FinancialService
  ) {
    this.getWishes();
  }

  private getWishes(): void {
    this.financialService.getWishes().subscribe((wishes: IWish[]) => {
      this.wishes = wishes;
    });
  }

  public openAchieveWishModal(): void {
    this.dialog.open<AchieveWishModalComponent>(AchieveWishModalComponent, {
      width: '350px',
      disableClose: true,
    });
  }

  public openEditWishModal(): void {
    this.dialog.open<CreateEditWishModalComponent>(
      CreateEditWishModalComponent,
      {
        width: '350px',
        disableClose: true,
        data: {
          isEdit: true,
        },
      }
    );
  }

  public openRemoveWishModal(wishId: string | undefined): void {
    const dialogRef = this.dialog.open<DeleteWishModalComponent>(
      DeleteWishModalComponent,
      {
        width: '350px',
        disableClose: true,
        data: {
          wishId: wishId,
        },
      }
    );

    dialogRef.afterClosed().subscribe(() => {
      this.getWishes();
    });
  }

  public openNewWishModal(): void {
    const dialogRef = this.dialog.open<CreateEditWishModalComponent>(
      CreateEditWishModalComponent,
      {
        width: '350px',
        disableClose: true,
        data: {
          isEdit: false,
        },
      }
    );

    dialogRef.afterClosed().subscribe(() => {
      this.getWishes();
    });
  }
}
