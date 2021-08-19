import { NgModule } from "node_modules2/@angular/core/core";
import { CreateUpdateUserComponent } from "./create-update-user/create-update-user.component";
import { RouterLinkRendererComponent } from "./router-link-renderer/router-link-renderer.component";
import { UserComponent } from "./user.component";
import { UsersOverviewComponent } from "./users-overview/users-overview.component";

@NgModule({
    declarations: [
        UserComponent,
        CreateUpdateUserComponent,
        RouterLinkRendererComponent,
        UsersOverviewComponent
    ],
    exports: [
        
    ]
})
export class AppModule { }