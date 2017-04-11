import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {AppModule} from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
.then(function(success){ 
	console.log('App bootstrapped');
})
.catch(function(err){ 
	console.error(err);
});

