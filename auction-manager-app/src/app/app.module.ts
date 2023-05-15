import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { BrowserModule } from '@angular/platform-browser';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './components/login/login.component';
import { AuctionComponent, NonActiveAuction, OptionsDialog, YourAuction } from './components/auction/auction.component';
import { addAuction, SellerComponent } from './components/seller/seller.component';
import { BuyerComponent } from './components/buyer/buyer.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {editItem, ItemComponent } from './components/item/item.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgxSpinnerModule } from "ngx-spinner";
import { NonActiveAuctionComponent } from './components/non-active-auction/non-active-auction.component';
import { YourAuctionsComponent } from './components/your-auctions/your-auctions.component';
import { addItem, ManageItemsComponent } from './components/manage-items/manage-items.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuctionComponent,
    SellerComponent,
    BuyerComponent,
    ProfileComponent,
    SidebarComponent,
    ItemComponent,
    OptionsDialog,
    addAuction,
    NonActiveAuctionComponent,
    YourAuctionsComponent,
    YourAuction,
    NonActiveAuction,
    ManageItemsComponent,
    addItem,
    editItem
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatInputModule,
    MatFormFieldModule,
    NgxSpinnerModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
