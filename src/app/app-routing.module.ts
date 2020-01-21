import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LOGINComponent } from './login/login.component';
import { REGISTERComponent } from './register/register.component';
import { HOMEComponent } from './home/home.component';
import { ABOUTComponent } from './about/about.component';
import { CONTACTComponent } from './contact/contact.component';
import { NAVBARComponent } from './navbar/navbar.component';



const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"LOGIN",component:LOGINComponent},
  {path:"REGISTER",component:REGISTERComponent},
  {path:"HOME",component:HOMEComponent},
  {path:"ABOUT",component:ABOUTComponent},
  {path:"CONTACT",component:CONTACTComponent},
  {path:"NAVBAR",component:NAVBARComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
