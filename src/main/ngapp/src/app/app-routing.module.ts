import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {LandingComponent} from "./components/landing/landing.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {HomeComponent} from "./components/home/home.component";
import {CollectionComponent} from "./components/collection/collection.component";
import {ShopComponent} from "./components/shop/shop.component";
import {RedeemComponent} from "./components/redeem/redeem.component";
import { GeneratePokemonComponent } from './components/generate-pokemon/generate-pokemon.component';


export const appRoutes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'collection',
    component: CollectionComponent
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'redeem',
    component: RedeemComponent
  }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}