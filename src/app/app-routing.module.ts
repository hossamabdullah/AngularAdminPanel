import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component'

const appRoutes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent}
    // {path: 'login', component: LoginComponent},
    // {path: 'register', component: RegisterationComponent},
    // {path: 'home', component: HomePageComponent, canActivate: [AuthenticationGuard], children:[
    //     {path: '', component: UserInfoComponent},
    //     {path: 'edit', component: UserEditComponent}
    // ]}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}