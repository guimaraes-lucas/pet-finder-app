import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { DashboardComponent } from './dashboard/dashboard.component'
import { PetDetailComponent } from './pets/pet-detail/pet-detail.component'
import { PetsComponent } from './pets/pets.component'
import { SignInFormComponent } from './sign-in-form/sign-in-form.component'
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component'

const ROUTES: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'sign-in',
    component: SignInFormComponent
  },
  {
    path: 'sign-up',
    component: SignUpFormComponent
  },
  // {
  //   path: 'kinds',
  //   component: KindsComponent
  // },
  { path: 'pets/:id', component: PetDetailComponent },
  { path: 'pets', component: PetsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
