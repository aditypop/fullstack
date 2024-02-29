import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrganizationComponent } from './organization/organization.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { NoauthGuard } from './noauth.guard';

const routes: Routes = [
 { path:'',component:HomeComponent},
 { path: 'organization', component: OrganizationComponent, canActivate: [AuthGuard]},
 { path: 'login', component: LoginComponent,canActivate: [NoauthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
