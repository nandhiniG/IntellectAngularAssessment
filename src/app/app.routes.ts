import { AppComponent } from "./app.component";
import { Routes, RouterModule } from '@angular/router';
import { UserDataComponent } from "./user-data/user-data.component";
import { UserInfoComponent } from "./user-info/user-info.component";

const routes: Routes  = [
   
    {
        path: 'allusers',
        component: UserDataComponent
    },
    {
        path:'user/:id',
        component:UserInfoComponent

    },
    {
        path: '',
        redirectTo:"/allusers",
    pathMatch: 'full'
    }
]

export const routing = RouterModule.forRoot(routes);

