import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuctionComponent } from './components/auction/auction.component';
import { BuyerComponent } from './components/buyer/buyer.component';
import { LoginComponent } from './components/login/login.component';
import { ManageItemsComponent } from './components/manage-items/manage-items.component';
import { NonActiveAuctionComponent } from './components/non-active-auction/non-active-auction.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SellerComponent } from './components/seller/seller.component';
import { YourAuctionsComponent } from './components/your-auctions/your-auctions.component';
import { SidebarComponent } from './sidebar/sidebar.component';


const routes: Routes = [
  {
    path: 'buyer',
    component: BuyerComponent,
  },
  {
    path: 'non-active',
    component: NonActiveAuctionComponent,
  },
  {
    path: 'your-auctions',
    component: YourAuctionsComponent,
  },
  {
    path: 'seller',
    component: SellerComponent
  },
  {
    path: 'manage-items',
    component: ManageItemsComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'auction',
    component: AuctionComponent
  },
  {
    path: "**",
    component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {
}
