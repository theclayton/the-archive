import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './Login Components/login/login.component';
import { HomeComponent } from './Archive Projects Components/home/home.component';
import { MyAccountComponent } from './Login Components/my-account/my-account.component';
import { AdminPanelComponent } from './Admin Panel Components/admin-panel/admin-panel.component';
import { ProjectViewComponent } from './Archive Projects Components/projects/project-view/project-view.component';
import { EditProjectComponent } from './Archive Projects Components/edit-project/edit-project.component';
import { SearchComponent } from './Archive Projects Components/search/search.component';
import { ApiRefComponent } from './Archive Projects Components/api-ref/api-ref.component';
import { AllProjectsComponent } from './Archive Projects Components/projects/all-projects/all-projects.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent},
  { path: 'featured', component: HomeComponent},
  { path: 'projects', component: AllProjectsComponent},
  { path: 'search', component: SearchComponent},
  { path: 'projects/:name', component: ProjectViewComponent},
  { path: 'api', component: ApiRefComponent},
  { path: 'my-account', component: MyAccountComponent, canActivate: [AuthGuard]},
  { path: 'admin', component: AdminPanelComponent, canActivate: [AuthGuard]},
  { path: 'edit/:name', component: EditProjectComponent, canActivate: [AuthGuard]},
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
