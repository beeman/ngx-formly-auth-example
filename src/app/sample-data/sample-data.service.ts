import { InMemoryDbService } from 'angular-in-memory-web-api'
import { countries as c } from './sample-data.countries'

export class SampleDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Windstorm' },
      { id: 2, name: 'Bombasto' },
      { id: 3, name: 'Magneta' },
      { id: 4, name: 'Tornado' },
    ]
    const countries = c

    return { heroes, countries }
  }
}
