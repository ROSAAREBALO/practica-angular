import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import{ DasboardComponent } from './dasboard/dasboard.component';

const routes: Routes = [
{
  path: 'login',
  component : LoginComponent
},
{
  path: 'dasboard',
  component : DasboardComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
