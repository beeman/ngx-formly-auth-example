import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'

import { routes } from './app-routing.module'
import { AppComponent } from './app.component'
import { AppSharedModule } from './app-shared.module'

import { SampleDataModule } from './sample-data/sample-data.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    SampleDataModule,
    RouterModule.forRoot(routes, { useHash: true }),
    AppSharedModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
