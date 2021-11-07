import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AngularSvgIconPreloaderModule } from 'angular-svg-icon-preloader';
import { BurgermenuComponent } from './burgermenu/burgermenu.component';
import { FragmentCountComponent } from './fragment-count/fragment-count.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ButtonComponent,
    NavbarComponent,
    BurgermenuComponent,
    FragmentCountComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    AngularSvgIconModule,
    AngularSvgIconPreloaderModule
  ],
  exports: [
    NavbarComponent,
    BurgermenuComponent,
    ButtonComponent,
    FragmentCountComponent
  ]
})
export class GlobalModule { 
}
