import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HousesComponent } from './houses/houses.component';
import { HeaderComponent } from './header/header.component';
import { PropertyformComponent } from './propertyform/propertyform.component';
import { PropertycardComponent } from './propertycard/propertycard.component';
import { OwnerComponent } from './owner/owner.component';
import { OwnerpropertiesComponent } from './ownerproperties/ownerproperties.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HousesComponent,
    HeaderComponent,
    PropertyformComponent,
    PropertycardComponent,
    OwnerComponent,
    OwnerpropertiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
