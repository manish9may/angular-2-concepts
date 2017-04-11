import { Component, OnInit} from '@angular/core';
import  {NgFor} from '@angular/common';

@Component({ 
  moduleId: module.id,
  selector: 'app-container',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
	constructor(){
		this.name = 'Angular Js 2';
		this.names = ['Ari', 'Carlos', 'Felipe', 'Nate'];
	}
	addArticle(title : HTMLInputElement,link : HTMLInputElement) : void{
		console.log(`Adding article title: ${title.value} and link: ${link.value}`);
	}
	ngOnInit(){

	}
}