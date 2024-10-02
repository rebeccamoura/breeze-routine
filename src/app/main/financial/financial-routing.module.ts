import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'wishlist'
	},
	{
		path: 'wishlist',
		component: WishlistComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancialRoutingModule { }
