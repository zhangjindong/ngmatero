import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { UserManagerRoutingModule } from './user-manager-routing.module';

const COMPONENTS = [];
const COMPONENTS_DYNAMIC = [];

@NgModule({
  imports: [
    SharedModule,
    UserManagerRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_DYNAMIC
  ],
  entryComponents: COMPONENTS_DYNAMIC
})
export class UserManagerModule { }
