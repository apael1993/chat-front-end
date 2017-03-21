/**
 * Created by Anushavan on 3/20/17.
 */
import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {DataServiceImpl} from "../../shared/impl/data.service.impl";
import {User} from "../../shared/model/user";
import {Observable} from "rxjs/RX";

@Component({
    moduleId: module.id,
    selector: "registration",
    templateUrl: "registration.component.html",
    styleUrls: ["registration.component.css"],
})

export class RegistrationComponent {

    private username: string;
    private password: string;
    private validationMessage: string;

    constructor(private router: Router,
                private dataService: DataServiceImpl) { }

    private signIn(): void {
        if (!this.username || !this.password) {
            this.validationMessage = "Username and password are required!";
        } else {
            this.validationMessage = "";
            this.dataService.signIn(new User(this.username, this.password))
                .subscribe((user: User) => {
                    this.router.navigate(["chatRoom"]);
                });
        }
    }

}