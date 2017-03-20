/**
 * Created by Anushavan on 3/20/17.
 */
import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {RegistrationComponent} from "./registration.component";

const registrationRoutes: Routes = [
    {
        path: "registration",
        component: RegistrationComponent
    }
];

export const registrationRouting: ModuleWithProviders = RouterModule.forChild(registrationRoutes);