import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { NavbarComponent } from './navbar/navbar.component';
@NgModule({
  imports: [CommonModule, RouterModule, HttpModule],
  exports: [RouterModule, HttpModule, NavbarComponent],
  declarations: [NavbarComponent]
})
export class CoreModule {    
	//Ensure that CoreModule is only loaded into AppModule
	constructor(){

	}
}