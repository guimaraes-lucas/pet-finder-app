import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component'
import { PetsComponent } from './pets/pets.component'
import { PetDetailComponent } from './pets/pet-detail/pet-detail.component'

const ROUTES = RouterModule.forRoot([
  // {
  //   path: 'addresses',
  //   component: AddressesComponent
  // },
  // {
  //   path: 'users',
  //   component: UsersComponent
  // },
  // {
  //   path: 'kinds',
  //   component: KindsComponent
  // },
  {
    path: 'pets',
    component: PetsComponent
  }
])

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PetsComponent,
    PetDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
