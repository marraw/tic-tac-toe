import { NgModule } from '@angular/core';

import { StartRoutingModule } from './start-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';

@NgModule({
  declarations: [SplashScreenComponent],
  imports: [StartRoutingModule, SharedModule],
})
export class StartModule {}
