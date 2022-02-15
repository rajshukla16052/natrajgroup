import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { BannerComponent } from './pages/banner/banner.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ServicesComponent } from './pages/services/services.component';

const routes: Routes = [
  {path:'',component:BannerComponent},
  { path:'services',component:ServicesComponent},
  { path:'login',component:LoginComponent},
  { path:'register',component:RegisterComponent},
  { path:'contact_us',component:ContactComponent},
  { path:'about_us',component:AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
