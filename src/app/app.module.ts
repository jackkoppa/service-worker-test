import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { IndexRouteComponent } from './index-route.component';
import { TestRouteComponent } from './test-route.component';

import { environment } from '../environments/environment';

const APP_ROUTES = [
    { path: 'test-route', component: TestRouteComponent },
    { path: '',   component: IndexRouteComponent },
    { path: '**',   redirectTo: '' }
]

@NgModule({
  declarations: [
    AppComponent,
    IndexRouteComponent,
    TestRouteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
