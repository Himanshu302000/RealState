import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HousesComponent } from './houses/houses.component';
import { LoginComponent } from './login/login.component';
import { OwnerComponent } from './owner/owner.component';
import { OwnerpropertiesComponent } from './ownerproperties/ownerproperties.component';
import { PropertycardComponent } from './propertycard/propertycard.component';
import { PropertyformComponent } from './propertyform/propertyform.component';
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
  ,
  {
    path:'propertiesform/:id',
    component:PropertyformComponent,
    canActivate:[RouteGuardServiceService]
  }
  ,
  {
    path:'propertycard',
    component:PropertycardComponent,
    canActivate:[RouteGuardServiceService]
  }
  ,
  {
    path:'owner/:userId/:id',
    component:OwnerComponent,
    canActivate:[RouteGuardServiceService]

  }
  ,
  {
    path:'ownerproperties/:ownerid',
    component:OwnerpropertiesComponent,
    canActivate:[RouteGuardServiceService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
