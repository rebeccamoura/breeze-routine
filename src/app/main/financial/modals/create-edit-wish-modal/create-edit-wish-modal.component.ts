import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICreateEditWishData } from '../../interfaces/ICreateEditWishData';

@Component({
  selector: 'app-create-edit-wish-modal',
  templateUrl: './create-edit-wish-modal.component.html',
  styleUrls: ['./create-edit-wish-modal.component.scss']
})
export class CreateEditWishModalComponent {
	// public isEdit: boolean = false;

	constructor( @Inject(MAT_DIALOG_DATA) public createEditWishData: ICreateEditWishData) {}

	public createWish() {}

	public editWish() {}
}
