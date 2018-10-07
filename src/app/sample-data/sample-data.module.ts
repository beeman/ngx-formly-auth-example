import { NgModule } from '@angular/core'

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { SampleDataService } from './sample-data.service'

@NgModule({
  imports: [HttpClientInMemoryWebApiModule.forRoot(SampleDataService)],
})
export class SampleDataModule {}
