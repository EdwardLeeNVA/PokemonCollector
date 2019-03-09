import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { CollectionComponent } from './components/collection/collection.component';
import { RedeemComponent } from './components/redeem/redeem.component';
import { AppRoutingModule } from './app-routing.module';
import { GeneratePokemonComponent } from './components/generate-pokemon/generate-pokemon.component';
import { JwtInterceptorService } from './jwt-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    RegisterComponent,
    HomeComponent,
    ShopComponent,
    CollectionComponent,
    RedeemComponent,
    GeneratePokemonComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptorService,
    
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}
