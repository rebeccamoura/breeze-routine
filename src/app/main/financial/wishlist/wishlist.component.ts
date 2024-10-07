import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteWishModalComponent } from '../modals/delete-wish-modal/delete-wish-modal.component';
import { AchieveWishModalComponent } from '../modals/achieve-wish-modal/achieve-wish-modal.component';
import { CreateEditWishModalComponent } from '../modals/create-edit-wish-modal/create-edit-wish-modal.component';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {
	public wishes!: string[];

	constructor( private dialog: MatDialog ) {
		this.wishes = ['Comprar computador', 'Comprar celular', 'Comprar teclado', 'Fazer tatuagem', 'Comprar computador', 'Comprar celular', 'Comprar teclado', 'Fazer tatuagem'];
	}

	public openAchieveWishModal(): void {
		this.dialog.open<AchieveWishModalComponent>(AchieveWishModalComponent, {
			width: '350px',
			disableClose: true,
		})
	}

	public openEditWishModal(): void {
		this.dialog.open<CreateEditWishModalComponent>(CreateEditWishModalComponent, {
			width: '350px',
			disableClose: true,
			data: {
				isEdit: true,
			}
		})
	}

	public openRemoveWishModal(): void {
		this.dialog.open<DeleteWishModalComponent>(DeleteWishModalComponent, {
			width: '350px',
			disableClose: true,
		})
	}

	public openNewWishModal(): void {
		this.dialog.open<CreateEditWishModalComponent>(CreateEditWishModalComponent, {
			width: '350px',
			disableClose: true,
			data: {
				isEdit: false,
			}
		})
	}
}
