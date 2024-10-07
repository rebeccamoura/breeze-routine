import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-wish-modal',
  templateUrl: './delete-wish-modal.component.html',
  styleUrls: ['./delete-wish-modal.component.scss']
})
export class DeleteWishModalComponent {
	public deleteWish() {
		alert('deletou')
	}
}
