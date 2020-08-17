// angular imports
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

// components imports
import { AppComponent } from './app.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { NavbarComponent } from './navbar/navbar.component'
import { PetSearchComponent } from './navbar/pet-search/pet-search.component'
import { PetsComponent } from './pets/pets.component'
import { PetDetailComponent } from './pets/pet-detail/pet-detail.component'
import { SignInFormComponent } from './sign-in-form/sign-in-form.component'
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component'

// services imports
import { AuthService } from './shared/auth.service'
import { KindService } from './kinds/shared/kind.service'
import { PetService } from './pets/shared/pet.service'

// guards imports
import { AuthGuard } from './guards/auth.guard'
import { NotAuthenticatedGuard } from './guards/not-autheticated.guard'

// modules imports
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    PetSearchComponent,
    PetsComponent,
    PetDetailComponent,
    SignInFormComponent,
    SignUpFormComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    KindService,
    NotAuthenticatedGuard,
    PetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
