import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {LeistungenComponent} from "./leistungen/leistungen.component";

const routes: Routes = [
  {path: '/', component: AppComponent},
  {path: 'leistungen', component: LeistungenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
