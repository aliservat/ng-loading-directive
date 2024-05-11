import {InjectionToken, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LoadingDirective} from "./directives/loading.directive";
import {LoadingComponent} from "./path/loading/loading.component";

export const LoadingDirectiveConfig = new InjectionToken<any>('LoadingDirectiveConfig');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoadingDirective,
  ],
  providers: [
    {
      provide:
      LoadingDirectiveConfig, useValue: {
        Component:LoadingComponent,
        FadeClass:'fade-loading'
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
