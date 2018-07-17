import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { Routes, RouterModule } from '@angular/router';

  const appRoutes: Routes = [
    {
      path: '',
      // blank
      component: LoginComponent
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'register',
      // register
      component: RegisterComponent
    },
    {
      path: 'home',
      component: HomeComponent
    },

  ];
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
