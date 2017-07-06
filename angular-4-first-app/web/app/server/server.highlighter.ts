import {Directive, ElementRef, HostListener,Input} from '@angular/core';

@Directive({
	selector : '[server-highlighter]',
})

export class ServerHighlighter{
	private el : ElementRef;
	constructor(el : ElementRef){
		this.el = el;
		//el.nativeElement.style.background = 'yellow';
	}
	@Input('highlight-color') hColor : string;
	@HostListener('mouseenter') onMouseEnter(){
		this.highlight(this.hColor);
	}
	@HostListener('mouseleave') onMouseLeave(){
		this.highlight(null);
	}
	private highlight(color: string) {
    	this.el.nativeElement.style.backgroundColor = color;
  	}
}