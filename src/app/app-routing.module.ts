import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { BuyerlandingComponent } from './components/buyerlanding/buyerlanding.component';
import { SellerlandingComponent } from './components/sellerlanding/sellerlanding.component';
import { AddbookComponent } from './components/addbook/addbook.component';
import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [
  { path: '', component:LandingComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register/:role', component: RegistrationComponent},
  { path: 'buyerhome', component:BuyerlandingComponent},
  { path: 'sellerhome', component:SellerlandingComponent},
  { path: 'addBook', component:AddbookComponent},
  {path:"**",component:ErrorComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
