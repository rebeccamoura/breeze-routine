import { Component } from '@angular/core';

@Component({
  selector: 'app-achieve-wish-modal',
  templateUrl: './achieve-wish-modal.component.html',
  styleUrls: ['./achieve-wish-modal.component.scss']
})
export class AchieveWishModalComponent {
	public achieveWish() {
		alert('conquistado!')
	}
}
