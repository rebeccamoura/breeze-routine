import { Component } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {
	public wishes!: string[];

	constructor() {
		this.wishes = ['Comprar computador', 'Comprar celular', 'Comprar teclado', 'Fazer tatuagem', 'Comprar computador', 'Comprar celular', 'Comprar teclado', 'Fazer tatuagem'];
	}
}
