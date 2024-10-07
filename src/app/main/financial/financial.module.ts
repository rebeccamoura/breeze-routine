import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinancialRoutingModule } from './financial-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { WishlistComponent } from './wishlist/wishlist.component';
import { HeaderComponent } from './header/header.component';
import { DeleteWishModalComponent } from './modals/delete-wish-modal/delete-wish-modal.component';
import { AchieveWishModalComponent } from './modals/achieve-wish-modal/achieve-wish-modal.component';
import { CreateEditWishModalComponent } from './modals/create-edit-wish-modal/create-edit-wish-modal.component';


@NgModule({
  declarations: [
    WishlistComponent,
    HeaderComponent,
    DeleteWishModalComponent,
    AchieveWishModalComponent,
    CreateEditWishModalComponent
  ],
  imports: [
    CommonModule,
    FinancialRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class FinancialModule { }
