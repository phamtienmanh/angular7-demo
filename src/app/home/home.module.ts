import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import {
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,
  MatIconModule
} from '@angular/material';

import {routes} from "./home-routes.module";
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class HomeModule { }
