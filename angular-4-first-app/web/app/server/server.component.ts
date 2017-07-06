import { Component } from '@angular/core';

@Component({
	selector : 'app-server-container',
	templateUrl : './app/server/server.component.html',
	styles : [`
	.online {
		color : white;
	}
		`]
	}
})
export class SeverComponent{
	serverId : number = 10;
	serverStatus : string = 'offline';
	color : string;
	constructor(){
		this.serverStatus =  Math.random() > 0.5  ? 'online' : 'offline';
		this.color = 'blue';
	}
	getColor(){
		return this.serverStatus === 'online' ? 'green' : 'red';
	}
	getServerStatus(){
		return this.serverStatus;
	}
}