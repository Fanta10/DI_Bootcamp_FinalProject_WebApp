import { MaterielModule } from './materiel/materiel/materiel.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login/login.component';
import { LayoutCustomerComponent } from './layout/layout-customer/layout-customer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutCustomerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterielModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
