import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component'
import { PetsComponent } from './pets/pets.component'
import { PetDetailComponent } from './pets/pet-detail/pet-detail.component'
import { PetService } from './pets/shared/pet.service'

const ROUTES = RouterModule.forRoot([
  // {
  //   path: 'addresses',
  //   component: AddressesComponent
  // },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  // {
  //   path: 'users',
  //   component: UsersComponent
  // },
  // {
  //   path: 'kinds',
  //   component: KindsComponent
  // },
  {
    path: 'pets/:id',
    component: PetDetailComponent
  },
  {
    path: 'pets',
    component: PetsComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
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
  providers: [
    PetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
