import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HousesComponent } from './houses/houses.component';
import { LoginComponent } from './login/login.component';
import { ManagepropertiesComponent } from './manageproperties/manageproperties.component';
import { OwnerComponent } from './owner/owner.component';
import { OwnerpropertiesComponent } from './ownerproperties/ownerproperties.component';
import { PropertycardComponent } from './propertycard/propertycard.component';
import { PropertyformComponent } from './propertyform/propertyform.component';
import { RouteGuardServiceService } from './services/security/route-guard-service.service';
import { SignupComponent } from './signup/signup.component';
import { UpdateformComponent } from './updateform/updateform.component';

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
  ,
  {
    path:'manageproperties/:id',
    component:ManagepropertiesComponent,
    canActivate:[RouteGuardServiceService]
  }
  ,
  {
    path:'updateform/:id',
    component:UpdateformComponent,
    canActivate:[RouteGuardServiceService]

  }
  ,
  {
    path:'about',
    component:AboutComponent,
    canActivate:[RouteGuardServiceService]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
