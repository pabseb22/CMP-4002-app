import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuctionComponent } from './components/auction/auction.component';
import { BuyerComponent } from './components/buyer/buyer.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SellerComponent } from './components/seller/seller.component';


const routes: Routes = [
  {
    path: 'buyer',
    component: BuyerComponent,
  },
  {
    path: 'seller',
    component: SellerComponent
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
    component: AppComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {
}
