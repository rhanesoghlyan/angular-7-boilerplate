import {NgModule} from '@angular/core';

import {MagazinesComponent} from './components/magazines/magazines.component';
import {MagazinesRoutingModule} from './magazines-routing.module';
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
