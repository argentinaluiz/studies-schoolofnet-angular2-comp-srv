import {Component, OnInit} from '@angular/core'; // decorator
import {MessageService, Alert} from './message.service'; // decorator

declare var module: any;

@Component({
    selector: 'my-app', // custom tag that we will use in template
    templateUrl: 'app.component.html',
    moduleId: module.id // variable created by typescript and SystemJS
})

export class AppComponent implements OnInit { // export permit use this class in another file
    messages: Alert[];

    constructor(private messageService: MessageService){}
    
    ngOnInit(): void {
        this.messages = this.messageService.messages;
    }
}

