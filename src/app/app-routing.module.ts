import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ImpressumComponent} from "./impressum/impressum.component";
import {DatenschutzerklaerungComponent} from "./datenschutzerklaerung/datenschutzerklaerung.component";
import {HomeComponent} from "./home/home.component";
import {TestComponent} from "./test/test.component";

const routes: Routes = [
  {path: 'home', component: TestComponent},
  {path: 'ben', component: HomeComponent},
  {path: 'impressum', component: ImpressumComponent},
  {path: 'datenschutz', component: DatenschutzerklaerungComponent},
  {path: '', redirectTo: "/home", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
