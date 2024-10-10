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
  public notAchievedWishes!: any;
  public achievedWishes!: any;

  constructor(
    private dialog: MatDialog,
    private financialService: FinancialService
  ) {
    this.getWishes();
  }

  private getWishes(): void {
    this.financialService.getWishes().subscribe((wishes: IWish[]) => {
      this.wishes = wishes;
      this.notAchievedWishes = wishes.filter(
        (wish) => wish.isAchieved === false
      );
      this.achievedWishes = wishes.filter((wish) => wish.isAchieved === true);
    });
  }

  private filterWishes(type: string) {}

  public openAchieveWishModal(wish: IWish): void {
    const dialogRef = this.dialog.open<AchieveWishModalComponent>(
      AchieveWishModalComponent,
      {
        width: '350px',
        disableClose: true,
        data: wish,
      }
    );
    dialogRef.afterClosed().subscribe(() => {
      this.getWishes();
    });
  }

  public openEditWishModal(wish: IWish): void {
    const dialogRef = this.dialog.open<CreateEditWishModalComponent>(
      CreateEditWishModalComponent,
      {
        width: '350px',
        disableClose: true,
        data: {
          isEdit: true,
          wish: wish,
        },
      }
    );

    dialogRef.afterClosed().subscribe(() => {
      this.getWishes();
    });
  }

  public openRemoveWishModal(wish: IWish): void {
    const dialogRef = this.dialog.open<DeleteWishModalComponent>(
      DeleteWishModalComponent,
      {
        width: '350px',
        disableClose: true,
        data: wish,
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
