import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlkatreszekComponent } from './alkatreszek/alkatreszek.component';
import { BiciklikComponent } from './biciklik/biciklik.component';
import { KiegeszitokComponent } from './kiegeszitok/kiegeszitok.component';
import { SzervizComponent } from './szerviz/szerviz.component';
import { RolunkComponent } from './rolunk/rolunk.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VerifyComponent } from './verify/verify.component';

const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "biciklik", component: BiciklikComponent },
    { path: "alkatreszek", component: AlkatreszekComponent },
    { path: "kiegeszitok", component: KiegeszitokComponent },
    { path: "szerviz", component: SzervizComponent },
    { path: "rolunk", component: RolunkComponent },
    { path: "login", component: LoginComponent },
    { path: "register",component: RegisterComponent },
    { path: "verify", component: VerifyComponent },

    { path: "", component: HomeComponent },
    { path: "**", component: HomeComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }