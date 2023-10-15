import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { PostComponent } from './post/post.component';


const routes: Routes = [
  
  {path :'',redirectTo:'login',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'createForm', component:CreateAccountComponent},
  {path:'post',component:PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
