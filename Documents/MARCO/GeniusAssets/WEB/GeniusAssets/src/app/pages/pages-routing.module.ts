import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActivosComponent } from './activos/activos.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', component: PagesComponent,
    children:[
      {path:'',component:DashboardComponent},
      {path:'activos',component:ActivosComponent},
      {path:'modelos',component:ActivosComponent},
    ]
}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes),PagesRoutingModule
  ],
  exports:[RouterModule]
})
export class PagesRoutingModule { }
