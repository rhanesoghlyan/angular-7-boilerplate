import {NgModule} from '@angular/core';

import {MagazinesComponent} from './components/magazines/magazines.component';
import {MagazinesRoutingModule} from './tasks-routing.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    MagazinesRoutingModule,
  ],
  declarations: [
    MagazinesComponent
  ]
})
export class MagazinesModule {
}
