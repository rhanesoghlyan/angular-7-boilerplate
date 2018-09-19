import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MagazinesComponent} from './components/magazines/magazines.component';
import {AuthGuard} from '../../core/services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: MagazinesComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MagazinesRoutingModule {
}
