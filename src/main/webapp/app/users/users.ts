import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {UsersService} from './users.service';
import {Account} from '../account/account';
import {IsAuthorized} from '../utils/is-authorized.directive';

@Component({
    selector: 'users',
    directives:[ROUTER_DIRECTIVES],
    templateUrl: './app/users/users.html',
    providers:[UsersService],
    directives: [IsAuthorized]
})
export class Users {
    users:Array<Account>;
    router: Router;
    constructor(router: Router,userService:UsersService) {
        this.users = [];
        this.router = router;
        userService.getAll().subscribe((users:Array<Account>) => this.users = users);
    }
    onSelectUser(event:Event,id:string):void {
        event.preventDefault();
        this.router.navigate(['User',{id:id}]);
    }
}
