import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component'
import {AssetsComponent} from './assets/assets.component';
import {ParticipantComponent} from './participant/participant.component'
import { DocumentComponent } from './document/document.component';
import { EmployeeComponent } from './employee/employee.component';
import { ModeratorComponent } from './moderator/moderator.component';

const appRoutes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'participants', component: ParticipantComponent},
    {path: 'assets', component: AssetsComponent},
    {path: 'document', component: DocumentComponent},
    {path: 'employee', component: EmployeeComponent},
    {path: 'moderator', component: ModeratorComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}