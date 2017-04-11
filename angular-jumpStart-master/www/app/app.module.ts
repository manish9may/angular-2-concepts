import { NgModule ,CUSTOM_ELEMENTS_SCHEMA}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { CoreModule }   from './core/core.module';
@NgModule({
	imports : [BrowserModule,
				CoreModule,
				AppRoutingModule],
	declarations : [AppComponent],
	bootstrap : [AppComponent],
	schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule{
	constructor(){

	}
}