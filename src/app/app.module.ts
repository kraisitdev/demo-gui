import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingLayoutComponent } from './layouts/landing-layout/landing-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginPageComponent } from './views/login-page/login-page.component';
import { HomePageComponent } from './views/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingLayoutComponent,
    AdminLayoutComponent,
    LoginPageComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
