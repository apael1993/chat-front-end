/**
 * Created by Anushavan on 3/20/17.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {chatRoomRouting} from "./chatRoom.routes";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        chatRoomRouting
    ],
    declarations: [
        
    ],
})

export class ChatRoomModule { }