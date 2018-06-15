import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import { DocumentComponent } from './document/document.component';
import { EmployeeComponent } from './employee/employee.component';
import { ModeratorComponent } from './moderator/moderator.component';
import { LoginComponent } from './login/login.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { AuthenticationGuard } from './guards/AuthenticationGuard';

const appRoutes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterationComponent},
    {path: 'home', component: HomeComponent, canActivate: [AuthenticationGuard]},
    {path: 'document', component: DocumentComponent, canActivate: [AuthenticationGuard]},
    {path: 'employee', component: EmployeeComponent, canActivate: [AuthenticationGuard]},
    {path: 'moderator', component: ModeratorComponent, canActivate: [AuthenticationGuard]}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}