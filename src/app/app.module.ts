import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeviceDetectorModule } from 'ngx-device-detector';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import { SonaDirective } from './sona.directive';
import { SonaComponent } from './sona/sona.component';

@NgModule({
  declarations: [
    AppComponent,
    SonaDirective,
    SonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DeviceDetectorModule.forRoot(),
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
