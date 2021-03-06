import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SurveyComponent } from './survey/survey.component';
import { ReportComponent } from './report/report.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'',component:HomeComponent },
  {path:'register',component:RegisterComponent },
  {path:'login',component:LoginComponent },
  {path:'survey',component:SurveyComponent,canActivate : [AuthGuard]},
  {path:'report',component:ReportComponent, canActivate : [AuthGuard]},
  {path:'**',component:PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
