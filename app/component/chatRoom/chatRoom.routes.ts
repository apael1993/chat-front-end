/**
 * Created by Anushavan on 3/20/17.
 */
import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {ChatRoomComponent} from "./chatRoom.component";

const chatRoomRoutes: Routes = [
    {
        path: "chatRoom",
        component: ChatRoomComponent
    }
];

export const chatRoomRouting: ModuleWithProviders = RouterModule.forChild(chatRoomRoutes);