import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MotosComponentComponent } from './motos-component/motos-component.component';
import {NotFoundComponent } from './not-found/not-found.component';
import {MotoInfoComponent} from './moto-info/moto-info.component';
import {AddMotoComponent} from './add-moto/add-moto.component';

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch:'full'},
  {path:'home' , component: MotosComponentComponent},
  {path:'moto/:id' , component: MotoInfoComponent},
  {path:'add/moto', component: AddMotoComponent },
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
