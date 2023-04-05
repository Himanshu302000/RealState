import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HousesComponent } from './houses/houses.component';
import { LoginComponent } from './login/login.component';
import { RouteGuardServiceService } from './services/security/route-guard-service.service';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
  },
  {
    path:'signup',
    component:SignupComponent,
    // canActivate:[RouteGuardServiceService]
  },
  {
    path:'houses/:id',
    component:HousesComponent,
    canActivate:[RouteGuardServiceService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
