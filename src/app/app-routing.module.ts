import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './home/about/about.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { SignupComponent } from './home/signup/signup.component';
import { LoginComponent } from './home/login/login.component';
import { ProductsComponent } from './home/products/products.component';
import { ShoppingCartComponent } from './home/shopping-cart/shopping-cart.component';
import { WishListComponent } from './home/wish-list/wish-list.component';
import { NotfoundComponent } from './home/notfound/notfound.component';
import { ProductComponent } from './home/product/product.component';
import { ProfileComponent } from './home/profile/profile.component';
import { MyaccountComponent } from './home/profile/myaccount/myaccount.component';
import { EditComponent } from './home/profile/edit/edit.component';
import { OrdersComponent } from './home/profile/orders/orders.component';
import { PaymentMethodsComponent } from './home/profile/payment-methods/payment-methods.component';
import { SendSuggestionsComponent } from './home/profile/send-suggestions/send-suggestions.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UsersComponent } from './admin/dashboard/users/users.component';
import { CategoriesComponent } from './admin/dashboard/categories/categories.component';
import { ReviewsComponent } from './admin/dashboard/reviews/reviews.component';
import { VendorsComponent } from './admin/dashboard/vendors/vendors.component';
import { StatsComponent } from './admin/dashboard/stats/stats.component';
import { AdminsComponent } from './admin/dashboard/admins/admins.component';
import { EditorsComponent } from './admin/dashboard/editors/editors.component';
import { AllProductsComponent } from './admin/dashboard/all-products/all-products.component';
import { ComplaintsComponent } from './admin/dashboard/complaints/complaints.component';
import { OffersComponent } from './admin/dashboard/offers/offers.component';
import { ChatComponent } from './admin/dashboard/chat/chat.component';
import { AllOrdersComponent } from './admin/dashboard/all-orders/all-orders.component';
import { ShowProductsComponent } from './admin/dashboard/all-products/show-products/show-products.component';
import { AddProductComponent } from './admin/dashboard/all-products/add-product/add-product.component';
import { SearchForProductComponent } from './admin/dashboard/all-products/search-for-product/search-for-product.component';
import { SingleChatComponent } from './admin/dashboard/chat/single-chat/single-chat.component';
import { SingleProductComponent } from './admin/dashboard/all-products/single-product/single-product.component';
import { SearchForUserComponent } from './admin/dashboard/users/search-for-user/search-for-user.component';
import { SingleUserComponent } from './admin/dashboard/users/single-user/single-user.component';
import { ShowUsersComponent } from './admin/dashboard/users/show-users/show-users.component';
import { AddCategoryComponent } from './admin/dashboard/categories/add-category/add-category.component';
import { AddEditorComponent } from './admin/dashboard/editors/add-editor/add-editor.component';
import { AddAdminComponent } from './admin/dashboard/admins/add-admin/add-admin.component';
import { AddVendorComponent } from './admin/dashboard/vendors/add-vendor/add-vendor.component';
import { ShowVendorsComponent } from './admin/dashboard/vendors/show-vendors/show-vendors.component';
import { ShowAllOrdersComponent } from './admin/dashboard/all-orders/show-all-orders/show-all-orders.component';
import { ShowNotRevisedOrdersComponent } from './admin/dashboard/all-orders/show-not-revised-orders/show-not-revised-orders.component';
import { ShowCanceledOrdersComponent } from './admin/dashboard/all-orders/show-canceled-orders/show-canceled-orders.component';
import { ShowUnderDeliveryOrdersComponent } from './admin/dashboard/all-orders/show-under-delivery-orders/show-under-delivery-orders.component';
import { ShowDeliveredOrdersComponent } from './admin/dashboard/all-orders/show-delivered-orders/show-delivered-orders.component';
import { SearchForOrderComponent } from './admin/dashboard/all-orders/search-for-order/search-for-order.component';
import { SearchForReviewComponent } from './admin/dashboard/reviews/search-for-review/search-for-review.component';
import { ShowNotRevisedReviewsComponent } from './admin/dashboard/reviews/show-not-revised-reviews/show-not-revised-reviews.component';
import { ShowRejectedReviewsComponent } from './admin/dashboard/reviews/show-rejected-reviews/show-rejected-reviews.component';
import { ShowAcceptedReviewsComponent } from './admin/dashboard/reviews/show-accepted-reviews/show-accepted-reviews.component';
import { ShowAllReviewsComponent } from './admin/dashboard/reviews/show-all-reviews/show-all-reviews.component';
import { SearchForOfferComponent } from './admin/dashboard/offers/search-for-offer/search-for-offer.component';
import { ShowAllOffersComponent } from './admin/dashboard/offers/show-all-offers/show-all-offers.component';
import { AddOfferComponent } from './admin/dashboard/offers/add-offer/add-offer.component';
import { UserOrderTrackingComponent } from './home/user-order-tracking/user-order-tracking.component';
import { RulesComponent } from './home/rules/rules.component';
import { PrivacyPolicyComponent } from './home/privacy-policy/privacy-policy.component';
import { NewOffersComponent } from './home/new-offers/new-offers.component';
import { EditorsLoginComponent } from './editors/editors-login/editors-login.component';
import { ShowComplaintsComponent } from './admin/dashboard/complaints/show-complaints/show-complaints.component';
import { RevisedComplaintsComponent } from './admin/dashboard/complaints/revised-complaints/revised-complaints.component';
import { SearchForComplaintComponent } from './admin/dashboard/complaints/search-for-complaint/search-for-complaint.component';
import { RepliedComplaintsComponent } from './admin/dashboard/complaints/replied-complaints/replied-complaints.component';
import { NotRevisedComplaintsComponent } from './admin/dashboard/complaints/not-revised-complaints/not-revised-complaints.component';
import { ClosedComplaintsComponent } from './admin/dashboard/complaints/closed-complaints/closed-complaints.component';
import { SetupAccountComponent } from './admin/dashboard/setup-account/setup-account.component';
import { BlockedComponent } from './admin/dashboard/blocked/blocked.component';
import { AddressComponent } from './home/profile/edit/address/address.component';
import { ColorsComponent } from './admin/dashboard/colors/colors.component';
import { AddColorComponent } from './admin/dashboard/colors/add-color/add-color.component';
import { AddPaymentMethodComponent } from './home/profile/payment-methods/add-payment-method/add-payment-method.component';
import { PaymentSuccessComponent } from './home/payment-success/payment-success.component';
import { EditColorComponent } from './admin/dashboard/colors/edit-color/edit-color.component';
import { EditCategoryComponent } from './admin/dashboard/categories/edit-category/edit-category.component';
import { VendorLoginComponent } from './vendor/vendor-login/vendor-login.component';
import { VendorDashboardComponent } from './vendor/vendor-dashboard/vendor-dashboard.component';
import { VendorSetupAccountComponent } from './vendor/vendor-setup-account/vendor-setup-account.component';
import { ShipmentsComponent } from './vendor/dashboard/shipments/shipments.component';
import { ShipmentComponent } from './vendor/dashboard/shipments/shipment/shipment.component';
import { ParkingComponent } from './admin/dashboard/parking/parking.component';
import { HistoryComponent } from './admin/dashboard/history/history.component';

const routes: Routes = [
  { path: '', component: AdminLoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactUsComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'products/:id', component: ProductComponent },
    { path: 'shopping-cart', component: ShoppingCartComponent },
    { path: 'wish-list', component: WishListComponent },
    { path: 'order-tracking', component: UserOrderTrackingComponent },
    { path: 'rules', component: RulesComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    { path: 'new-offers', component: NewOffersComponent },
    { path: 'payment-success', component: PaymentSuccessComponent },

    { path: 'profile', component: ProfileComponent, children: [
      { path: 'add-payment-method', component: AddPaymentMethodComponent },

      { path: 'myaccount', component: MyaccountComponent },
      { path: 'edit', component: EditComponent },
      
      { path:"address/:id", component: AddressComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'payment-methods', component: PaymentMethodsComponent },
      { path: 'send-suggestions', component: SendSuggestionsComponent },
    ] },
  
  
  { path: 'vendor/login', component: VendorLoginComponent },
  { path: 'vendor/dashboard', component: VendorDashboardComponent },
  { path: 'vendor/setup-account', component: VendorSetupAccountComponent },
  { path: 'vendor/dashboard/shipments', component: ShipmentsComponent },
  { path: 'vendor/dashboard/shipments/:id', component: ShipmentComponent },


  { path: 'admin/login', component: AdminLoginComponent },
  { path: 'setup-account', component: SetupAccountComponent },
  { path: 'blocked', component: BlockedComponent },
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: 'users', component: UsersComponent },
    { path: 'history', component: HistoryComponent },
    { path: 'parking', component: ParkingComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'colors', component: ColorsComponent },
    { path: 'reviews', component: ReviewsComponent },
    { path: 'vendors', component: VendorsComponent },
    { path: 'stats', component: StatsComponent },
    { path: 'editors', component: EditorsComponent },
    { path: 'admins', component: AdminsComponent },
    { path: 'products', component: AllProductsComponent },
    { path: 'orders', component: AllOrdersComponent },
    { path: 'complaints', component: ComplaintsComponent },
    { path: 'offers', component: OffersComponent },
    { path: 'chat', component: ChatComponent, children: [
      { path: ':id', component: SingleChatComponent },
    ]},
    
    { path: 'products/show', component: ShowProductsComponent },
    { path: 'products/add', component: AddProductComponent },
    { path: 'products/search', component: SearchForProductComponent },
    { path: 'products/:id', component: SingleProductComponent },

    { path: 'users/show', component: ShowUsersComponent },
    { path: 'users/search', component: SearchForUserComponent },
    { path: 'products/:id', component: SingleUserComponent },

    { path: 'categories/add', component: AddCategoryComponent },
    { path: 'categories/edit/:id', component: EditCategoryComponent },

    { path: 'colors/add', component: AddColorComponent },
    { path: 'colors/edit/:id', component: EditColorComponent },

    { path: 'editors/add', component: AddEditorComponent },

    { path: 'admins/add', component: AddAdminComponent },

    { path: 'vendors/show', component: ShowVendorsComponent },
    { path: 'vendors/add', component: AddVendorComponent },

    { path: 'orders/all', component: ShowAllOrdersComponent },
    { path: 'orders/not-revised', component: ShowNotRevisedOrdersComponent },
    { path: 'orders/canceled', component: ShowCanceledOrdersComponent },
    { path: 'orders/under-delivery', component: ShowUnderDeliveryOrdersComponent },
    { path: 'orders/delivered', component: ShowDeliveredOrdersComponent },
    { path: 'orders/search', component: SearchForOrderComponent },

    { path: 'reviews/all', component: ShowAllReviewsComponent },
    { path: 'reviews/accepted', component: ShowAcceptedReviewsComponent },
    { path: 'reviews/rejected', component: ShowRejectedReviewsComponent },
    { path: 'reviews/not-revised', component: ShowNotRevisedReviewsComponent },
    { path: 'reviews/search', component: SearchForReviewComponent },

    { path: 'offers/all', component: ShowAllOffersComponent },
    { path: 'offers/add', component: AddOfferComponent },
    { path: 'offers/search', component: SearchForOfferComponent },

    { path: 'complaints/all', component: ShowComplaintsComponent },
    { path: 'complaints/revised', component: RevisedComplaintsComponent },
    { path: 'complaints/not-revised', component: NotRevisedComplaintsComponent },
    { path: 'complaints/replied', component: RepliedComplaintsComponent },
    { path: 'complaints/search', component: SearchForComplaintComponent },
    { path: 'complaints/closed', component: ClosedComplaintsComponent },


  ]},
  
  { path: 'editor/login', component: EditorsLoginComponent },

  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
