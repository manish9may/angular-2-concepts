import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent }  from './app.component';

import {SeverComponent} from './../server/server.component';
import {SeversComponent} from './../servers/servers.component';
import {ServerHighlighter} from './../server/server.highlighter';

import {CardSeverComponent} from './../server/card.server.component';

import {DelayDirective} from './../directives/delay.directive';
@NgModule({
	imports : [BrowserModule,FormsModule,HttpModule],
	declarations : [AppComponent,SeverComponent,SeversComponent,ServerHighlighter,CardSeverComponent,DelayDirective],
	providers : [],
	bootstrap : [AppComponent]
})

export class AppModule {
	
}