/**
 * Created by Anushavan on 3/20/17.
 */
import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {SerializationService} from "./serialization.service";
import {DataService} from "../api/data.service";
import {User} from "../model/user";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

@Injectable()
export class DataServiceImpl implements DataService {

    private CHAT_SERVICE_URI: string = "";

    constructor(private http: Http,
                private serializationService: SerializationService) { }

    public signIn(user: User): Observable<User> {
        let data: any = this.serializationService.serializeUser(user);
        let body = JSON.stringify(data);

        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http
            .post(`${this.CHAT_SERVICE_URI}/users`, body, options)
            .map(DataServiceImpl.extractResponseData);
    }

    private static extractResponseData(response: Response): any {
        let body: any = response.json();

        return body || {};
    }

}