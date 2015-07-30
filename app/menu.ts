/// <reference path="../typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
	selector: 'my-menu'
})

@View({
	templateUrl: 'views/menu.html'
})

class MyMenuComponent {
	version: string;
	
	constructor() {
		this.version = '1.0.0';
	}
}

bootstrap(MyMenuComponent);