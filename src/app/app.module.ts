import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HttpClient } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { BannerComponent } from './pages/banner/banner.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ReactiveFormsModule } from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    RegisterComponent,
    LoginComponent,
    ServicesComponent,
    ContactComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
