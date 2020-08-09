import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PetDetailComponent } from './pets/pet-detail/pet-detail.component'
import { PetsComponent } from './pets/pets.component'

const ROUTES: Routes = [
  // {
  //   path: 'addresses',
  //   component: AddressesComponent
  // },
  { path: 'dashboard', component: DashboardComponent },
  // {
  //   path: 'users',
  //   component: UsersComponent
  // },
  // {
  //   path: 'kinds',
  //   component: KindsComponent
  // },
  { path: 'pets/:id', component: PetDetailComponent },
  { path: 'pets', component: PetsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
