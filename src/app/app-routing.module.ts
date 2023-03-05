import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinginComponent } from './components/singin/singin.component';
import { SingupComponent } from './components/singup/singup.component';
import { HeroscreenComponent } from './components/heroscreen/heroscreen.component';

const routes: Routes = [
  { path: '', component: HeroscreenComponent },
  { path: 'singin', component: SinginComponent },
  { path: 'singup', component: SingupComponent },
  { path: '**', component: HeroscreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
