import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProblemsComponent } from './problems/problems.component';
import { ProblemDetailComponent } from './problem-detail/problem-detail.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:'',redirectTo:'login' ,pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'problems',component:ProblemsComponent,canActivate : [AuthGuard]},
  {path:'problems/:id',component:ProblemDetailComponent,canActivate : [AuthGuard]},
  {path:'**',redirectTo:'/login',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
