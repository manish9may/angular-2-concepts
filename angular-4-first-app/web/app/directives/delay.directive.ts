import {Directive,Input,TemplateRef,ViewContainerRef} from '@angular/core';

@Directive({
	selector : '[app-delay]'
})
export class DelayDirective {
	constructor(private templateRef : TemplateRef<any>,private viewContainerRef : ViewContainerRef){
	}
	@Input('app-delay')
	set delay(time : number){	
		setTimeout(() => {
			this.viewContainerRef.createEmbeddedView(this.templateRef);
		},time)
	}
}