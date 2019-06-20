import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StartComponent} from './start/start.component';
import {CreateComponent} from './create/create.component';
import {ReadComponent} from './read/read.component';

const routes: Routes = [
  {
    path: 'create', component: CreateComponent, pathMatch: 'full'
  },
  {
    path: 'read', component: ReadComponent, pathMatch: 'full'
  },
  {
    path: 'start', component: StartComponent, pathMatch: 'full'
  },
  {
    path: '', redirectTo: 'start', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
