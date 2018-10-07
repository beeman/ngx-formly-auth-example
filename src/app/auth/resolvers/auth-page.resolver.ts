import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve } from '@angular/router'
import { AuthPage } from '../models'
import { authPages } from '../auth.config'

@Injectable({
  providedIn: 'root',
})
export class AuthPageResolver implements Resolve<AuthPage> {

  resolve(route: ActivatedRouteSnapshot) {
    const { pageId } = route.data

    if (!authPages[pageId]) {
      console.error(`Cannot find authPage with id ${pageId}`)
    }
    return authPages[pageId]
  }
}
