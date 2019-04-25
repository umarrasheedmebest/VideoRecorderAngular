import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SonaComponent } from './sona/sona.component';

const routes: Routes = [
  { path: "sona", component: SonaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
