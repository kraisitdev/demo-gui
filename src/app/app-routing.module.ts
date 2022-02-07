import { HomePageComponent } from './views/home-page/home-page.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingLayoutComponent } from './layouts/landing-layout/landing-layout.component';
import { LoginPageComponent } from './views/login-page/login-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LandingLayoutComponent,
    children: [{ path: '', component: LoginPageComponent }],
  },
  {
    path: 'main',
    component: AdminLayoutComponent,
    children: [{ path: 'home', component: HomePageComponent }],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
