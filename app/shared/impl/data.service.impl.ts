/**
 * Created by Anushavan on 3/20/17.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {SerializationService} from "./serialization.service";
import {DataService} from "../api/data.service";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

@Injectable()
export class DataServiceImpl implements DataService {

    private CHAT_SERVICE_URI: string = "";

    constructor(private http: Http,
                private serializationService: SerializationService) { }

}