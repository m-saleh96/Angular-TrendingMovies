import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesdetailsComponent } from './moviesdetails/moviesdetails.component';
import { MoviesComponent } from './movies/movies.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NetworkComponent } from './network/network.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'' , redirectTo:'home' , pathMatch:'full'},
  {path:'home'  , canActivate:[AuthGuard], component:HomeComponent},
  {path:'movies' , canActivate:[AuthGuard] ,component:MoviesComponent},
  {path:'about' , canActivate:[AuthGuard] ,component:AboutComponent},
  {path:'login'  ,component:LoginComponent},
  {path:'people' , canActivate:[AuthGuard] ,component:PeopleComponent},
  {path:'register' , component:RegisterComponent},
  {path:'tv' , canActivate:[AuthGuard] ,component:TvComponent},
  {path:'moviedetails/:type/:id'  , component:MoviesdetailsComponent},
  {path:'**' , component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
