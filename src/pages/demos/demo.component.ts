import { Component, OnInit } from '@angular/core';
import { DemoService } from './demo.service';

@Component({
    selector: 'pc-demo',
    templateUrl: 'demo.component.html',
    providers : [DemoService]
})
export class DemoComponent{

    users: any[];
    constructor(private _demoService : DemoService){
    }

    ngOnInit(){
        this._demoService.getUsers()
            .subscribe(
            (users) => {
                this.users = users;
            }
        );

    }
            
}