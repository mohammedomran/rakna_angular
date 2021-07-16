import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './home/signup/signup.component';
import { LoginComponent } from './home/login/login.component';
import { AboutComponent } from './home/about/about.component';
import { ProductsComponent } from './home/products/products.component';
import { ShoppingCartComponent } from './home/shopping-cart/shopping-cart.component';
import { WishListComponent } from './home/wish-list/wish-list.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { ProductComponent } from './home/product/product.component';
import { NotfoundComponent } from './home/notfound/notfound.component';
import { ProfileComponent } from './home/profile/profile.component';
import { MyaccountComponent } from './home/profile/myaccount/myaccount.component';
import { EditComponent } from './home/profile/edit/edit.component';
import { OrdersComponent } from './home/profile/orders/orders.component';
import { PaymentMethodsComponent } from './home/profile/payment-methods/payment-methods.component';
import { SendSuggestionsComponent } from './home/profile/send-suggestions/send-suggestions.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UsersComponent } from './admin/dashboard/users/users.component';
import { CategoriesComponent } from './admin/dashboard/categories/categories.component';
import { ReviewsComponent } from './admin/dashboard/reviews/reviews.component';
import { EditorsComponent } from './admin/dashboard/editors/editors.component';
import { VendorsComponent } from './admin/dashboard/vendors/vendors.component';
import { OrderTrackingComponent } from './admin/dashboard/order-tracking/order-tracking.component';
import { ChatComponent } from './admin/dashboard/chat/chat.component';
import { NotificationsComponent } from './admin/dashboard/notifications/notifications.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { StatsComponent } from './admin/dashboard/stats/stats.component';
import { AdminsComponent } from './admin/dashboard/admins/admins.component';
import { AllProductsComponent } from './admin/dashboard/all-products/all-products.component';
import { ComplaintsComponent } from './admin/dashboard/complaints/complaints.component';
import { OffersComponent } from './admin/dashboard/offers/offers.component';
import { AllOrdersComponent } from './admin/dashboard/all-orders/all-orders.component';
import { ShowProductsComponent } from './admin/dashboard/all-products/show-products/show-products.component';
import { EditProductComponent } from './admin/dashboard/all-products/edit-product/edit-product.component';
import { SearchForProductComponent } from './admin/dashboard/all-products/search-for-product/search-for-product.component';
import { AddProductComponent } from './admin/dashboard/all-products/add-product/add-product.component';
import { SingleChatComponent } from './admin/dashboard/chat/single-chat/single-chat.component';
import { SingleProductComponent } from './admin/dashboard/all-products/single-product/single-product.component';
import { ShowUsersComponent } from './admin/dashboard/users/show-users/show-users.component';
import { SearchForUserComponent } from './admin/dashboard/users/search-for-user/search-for-user.component';
import { SingleUserComponent } from './admin/dashboard/users/single-user/single-user.component';
import { AddCategoryComponent } from './admin/dashboard/categories/add-category/add-category.component';
import { AddEditorComponent } from './admin/dashboard/editors/add-editor/add-editor.component';
import { AddAdminComponent } from './admin/dashboard/admins/add-admin/add-admin.component';
import { AddVendorComponent } from './admin/dashboard/vendors/add-vendor/add-vendor.component';
import { ShowVendorsComponent } from './admin/dashboard/vendors/show-vendors/show-vendors.component';
import { ShowAllOrdersComponent } from './admin/dashboard/all-orders/show-all-orders/show-all-orders.component';
import { ShowDeliveredOrdersComponent } from './admin/dashboard/all-orders/show-delivered-orders/show-delivered-orders.component';
import { ShowCanceledOrdersComponent } from './admin/dashboard/all-orders/show-canceled-orders/show-canceled-orders.component';
import { ShowNotRevisedOrdersComponent } from './admin/dashboard/all-orders/show-not-revised-orders/show-not-revised-orders.component';
import { ShowUnderDeliveryOrdersComponent } from './admin/dashboard/all-orders/show-under-delivery-orders/show-under-delivery-orders.component';
import { SearchForOrderComponent } from './admin/dashboard/all-orders/search-for-order/search-for-order.component';
import { ShowAllReviewsComponent } from './admin/dashboard/reviews/show-all-reviews/show-all-reviews.component';
import { ShowAcceptedReviewsComponent } from './admin/dashboard/reviews/show-accepted-reviews/show-accepted-reviews.component';
import { ShowRejectedReviewsComponent } from './admin/dashboard/reviews/show-rejected-reviews/show-rejected-reviews.component';
import { ShowNotRevisedReviewsComponent } from './admin/dashboard/reviews/show-not-revised-reviews/show-not-revised-reviews.component';
import { SearchForReviewComponent } from './admin/dashboard/reviews/search-for-review/search-for-review.component';
import { SearchForOfferComponent } from './admin/dashboard/offers/search-for-offer/search-for-offer.component';
import { AddOfferComponent } from './admin/dashboard/offers/add-offer/add-offer.component';
import { ShowAllOffersComponent } from './admin/dashboard/offers/show-all-offers/show-all-offers.component';
import { NavbarComponent } from './home/shared/navbar/navbar.component';
import { FooterComponent } from './home/shared/footer/footer.component';
import { MessagesComponent } from './home/shared/messages/messages.component';
import { UserOrderTrackingComponent } from './home/user-order-tracking/user-order-tracking.component';
import { RulesComponent } from './home/rules/rules.component';
import { PrivacyPolicyComponent } from './home/privacy-policy/privacy-policy.component';
import { NewOffersComponent } from './home/new-offers/new-offers.component';
import { EditorsLoginComponent } from './editors/editors-login/editors-login.component';
import { SearchForComplaintComponent } from './admin/dashboard/complaints/search-for-complaint/search-for-complaint.component';
import { RevisedComplaintsComponent } from './admin/dashboard/complaints/revised-complaints/revised-complaints.component';
import { NotRevisedComplaintsComponent } from './admin/dashboard/complaints/not-revised-complaints/not-revised-complaints.component';
import { ShowComplaintsComponent } from './admin/dashboard/complaints/show-complaints/show-complaints.component';
import { RepliedComplaintsComponent } from './admin/dashboard/complaints/replied-complaints/replied-complaints.component';
import { ClosedComplaintsComponent } from './admin/dashboard/complaints/closed-complaints/closed-complaints.component';
import { BlockedComponent } from './admin/dashboard/blocked/blocked.component';
import { SetupAccountComponent } from './admin/dashboard/setup-account/setup-account.component';
import { AddressComponent } from './home/profile/edit/address/address.component';
import { ColorsComponent } from './admin/dashboard/colors/colors.component';
import { AddColorComponent } from './admin/dashboard/colors/add-color/add-color.component';
import { AddPaymentMethodComponent } from './home/profile/payment-methods/add-payment-method/add-payment-method.component';
import { from } from 'rxjs';
import { PaymentSuccessComponent } from './home/payment-success/payment-success.component';
import { EditColorComponent } from './admin/dashboard/colors/edit-color/edit-color.component';
import { EditCategoryComponent } from './admin/dashboard/categories/edit-category/edit-category.component';
import { VendorLoginComponent } from './vendor/vendor-login/vendor-login.component';
import { VendorDashboardComponent } from './vendor/vendor-dashboard/vendor-dashboard.component';
import { VendorSetupAccountComponent } from './vendor/vendor-setup-account/vendor-setup-account.component';
import { ShipmentComponent } from './vendor/dashboard/shipments/shipment/shipment.component';
import { ShipmentsComponent } from './vendor/dashboard/shipments/shipments.component';
import { ParkingComponent } from './admin/dashboard/parking/parking.component';
import { HistoryComponent } from './admin/dashboard/history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    AboutComponent,
    ProductsComponent,
    ShoppingCartComponent,
    WishListComponent,
    ContactUsComponent,
    ProductComponent,
    NotfoundComponent,
    ProfileComponent,
    MyaccountComponent,
    EditComponent,
    OrdersComponent,
    PaymentMethodsComponent,
    SendSuggestionsComponent,
    DashboardComponent,
    UsersComponent,
    CategoriesComponent,
    ReviewsComponent,
    EditorsComponent,
    VendorsComponent,
    OrderTrackingComponent,
    ChatComponent,
    NotificationsComponent,
    AdminLoginComponent,
    StatsComponent,
    AdminsComponent,
    AllProductsComponent,
    ComplaintsComponent,
    OffersComponent,
    AllOrdersComponent,
    ShowProductsComponent,
    EditProductComponent,
    SearchForProductComponent,
    AddProductComponent,
    SingleChatComponent,
    SingleProductComponent,
    ShowUsersComponent,
    SearchForUserComponent,
    SingleUserComponent,
    AddCategoryComponent,
    AddEditorComponent,
    AddAdminComponent,
    AddVendorComponent,
    ShowVendorsComponent,
    ShowAllOrdersComponent,
    ShowDeliveredOrdersComponent,
    ShowCanceledOrdersComponent,
    ShowNotRevisedOrdersComponent,
    ShowUnderDeliveryOrdersComponent,
    SearchForOrderComponent,
    ShowAllReviewsComponent,
    ShowAcceptedReviewsComponent,
    ShowRejectedReviewsComponent,
    ShowNotRevisedReviewsComponent,
    SearchForReviewComponent,
    SearchForOfferComponent,
    AddOfferComponent,
    ShowAllOffersComponent,
    NavbarComponent,
    FooterComponent,
    MessagesComponent,
    UserOrderTrackingComponent,
    RulesComponent,
    PrivacyPolicyComponent,
    NewOffersComponent,
    EditorsLoginComponent,
    SearchForComplaintComponent,
    RevisedComplaintsComponent,
    NotRevisedComplaintsComponent,
    ShowComplaintsComponent,
    RepliedComplaintsComponent,
    ClosedComplaintsComponent,
    BlockedComponent,
    SetupAccountComponent,
    AddressComponent,
    ColorsComponent,
    AddColorComponent,
    AddPaymentMethodComponent,
    PaymentSuccessComponent,
    EditColorComponent,
    EditCategoryComponent,
    VendorLoginComponent,
    VendorDashboardComponent,
    VendorSetupAccountComponent,
    ShipmentsComponent,
    ShipmentComponent,
    ParkingComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    /*AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
