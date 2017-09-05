import { HomesService } from './services/homes.service';
import { UserService } from './services/user.service';
import { NgModule , Optional, SkipSelf} from '@angular/core';

@NgModule({
  imports: [],
  declarations: [],
  providers: [UserService, HomesService]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('Core module already provided! Please provide it only in the App Module!');
    }
  }
}
