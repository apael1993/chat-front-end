/**
 * Created by Anushavan on 3/21/17.
 */
import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {DataServiceImpl} from "../../shared/impl/data.service.impl";
import {Observable} from "rxjs/RX";

@Component({
    moduleId: module.id,
    selector: "chatRoom",
    templateUrl: "chatRoom.component.html",
    styleUrls: ["chatRoom.component.css"],
})

export class ChatRoomComponent {

    constructor(private dataService: DataServiceImpl) { }

}