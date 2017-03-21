/**
 * Created by Anushavan on 3/20/17.
 */
import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {RegistrationComponent} from "./component/registration/registration.component";
import {ChatRoomComponent} from "./component/chatRoom/chatRoom.component";

const appRoutes: Routes = [
    {
        path: "",
        redirectTo: "registration",
        pathMatch: 'full'
    },
    {
        path: "registration",
        component: RegistrationComponent,
    },
    {
        path: "chatRoom",
        component: ChatRoomComponent,
    }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

