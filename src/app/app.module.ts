import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB6BZ1CEJyQfLitfG-BLi67sNiHW2SokzE'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
