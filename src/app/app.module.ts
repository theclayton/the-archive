import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AuthInterceptor } from './auth-interceptor';

import { LoginComponent } from './Login Components/login/login.component';
import { MyAccountComponent } from './Login Components/my-account/my-account.component';
import { CreateAccountComponent } from './Login Components/create-account/create-account.component';

import { AdminPanelComponent } from './Admin Panel Components/admin-panel/admin-panel.component';
import { FeaturePageEditorComponent } from './Admin Panel Components/feature-page-editor/feature-page-editor.component';
import { ManageProjectsComponent } from './Admin Panel Components/manage-projects/manage-projects.component';
import { ManageUsersComponent } from './Admin Panel Components/manage-users/manage-users.component';

import { HomeComponent } from './Archive Projects Components/home/home.component';
import { HeaderComponent } from './Archive Projects Components/header/header.component';
import { SearchBarComponent } from './Archive Projects Components/search-bar/search-bar.component';
import { TechnologiesBarComponent } from './Archive Projects Components/technologies-bar/technologies-bar.component';
import { ProjectsComponent } from './Archive Projects Components/projects/projects.component';
import { CreateUserComponent } from './Admin Panel Components/manage-users/create-user/create-user.component';
import { UserListComponent } from './Admin Panel Components/manage-users/user-list/user-list.component';
import { ProjectListComponent } from './Admin Panel Components/manage-projects/project-list/project-list.component';
import { SidePanelComponent } from './Archive Projects Components/side-panel/side-panel.component';
import { ProjectPreviewComponent } from './Archive Projects Components/projects/project-preview/project-preview.component';
import { ProjectComponent } from './Archive Projects Components/projects/project/project.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    SearchBarComponent,
    TechnologiesBarComponent,
    MyAccountComponent,
    AdminPanelComponent,
    ProjectsComponent,
    CreateAccountComponent,
    FeaturePageEditorComponent,
    ManageProjectsComponent,
    ManageUsersComponent,
    CreateUserComponent,
    UserListComponent,
    ProjectListComponent,
    SidePanelComponent,
    ProjectPreviewComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MatTableModule,
    MatCheckboxModule,
    FlexLayoutModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true,}],
  bootstrap: [AppComponent]
})
export class AppModule { }
