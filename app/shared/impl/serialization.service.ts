/**
 * Created by Anushavan on 3/20/17.
 */
import {Injectable} from "@angular/core";
import {User} from "../model/user";
import {Observable} from "rxjs/Rx";

@Injectable()
export class SerializationService {

    constructor() { }
    
    public serializeUser(user: User): any {
        let data: any  = {};

        data["username"] = user.getUsername();
        data["password"] = user.getPassword();
        data["email"] = user.getEmail();
        
        return data;
    }

}