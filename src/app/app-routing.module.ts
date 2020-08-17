import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { DashboardComponent } from './dashboard/dashboard.component'
import { PetDetailComponent } from './pets/pet-detail/pet-detail.component'
import { PetsComponent } from './pets/pets.component'
import { SignInFormComponent } from './sign-in-form/sign-in-form.component'
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component'

import { AuthGuard } from './guards/auth.guard'
import { NotAuthenticatedGuard } from './guards/not-autheticated.guard'

const ROUTES: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'sign-in', component: SignInFormComponent, canActivate: [NotAuthenticatedGuard] },
  { path: 'sign-up', component: SignUpFormComponent, canActivate: [NotAuthenticatedGuard] },
  // { path: 'kinds', component: KindsComponent, canActivate: [AuthGuard] },
  { path: 'pets/:id', component: PetDetailComponent, canActivate: [AuthGuard] },
  { path: 'pets', component: PetsComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
