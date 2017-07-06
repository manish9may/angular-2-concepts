import { Component, OnInit} from '@angular/core';

@Component({
	selector : '[app-servers-container]',
	templateUrl : './app/servers/servers.component.html',
	styles : [`
		.box{
				padding: 2rem;
			    font-size: 2rem;
			    font-family: 'Helvetica', sans-serif;
			    font-weight: 300;
			    background: #e3f2fd;
			    margin: 1rem;
			    display: inline-block;
			}
	`]
})
export class SeversComponent implements OnInit{
	allowNewServer : boolean = true;
	serverCreationStatus : string =  'No Server was created!';
	serverName : string = '';
	serverCreated : boolean = false;
	servers : Object = ['TestServer 1','TestServer 2'];
	items : number[] = [1,2,3]
	constructor(){
		setTimeout(() => {
			this.allowNewServer = false;
		},1000)
	}
	ngOnInit(){

	}
	onCreateServer(){
		this.servers.push(this.serverName);
		this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;	
		this.serverCreated = true;
	}
	onUpdateServerName(event : Event){
		this.serverName = (<HTMLInputElement>event.target).value;
	}
	addItems(){
		this.items.push(this.items.length + 1);
	}
}