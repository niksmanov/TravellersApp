import { NotFoundComponent } from './shared/not-found/not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './users/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
//   { path: 'restaurants', loadChildren: './restaurants/restaurants.module#RestaurantsModule' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path : 'homes', loadChildren: './allHomes/allHomes.module#AllHomesModule'},
  { path: 'users', loadChildren: './users/users.module#UsersModule'},
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
