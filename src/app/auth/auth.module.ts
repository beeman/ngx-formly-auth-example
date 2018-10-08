import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { AppSharedModule } from '../app-shared.module'

import { AuthPageComponent } from './components/auth-page/auth-page.component'
import { AuthIndexComponent } from './containers/auth-index/auth-index.component'
import { forgotPath, signInPath, signUpPath } from './auth.config'
import { AuthPageResolver } from './resolvers/auth-page.resolver'

@NgModule({
  imports: [
    AppSharedModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: signInPath },
      {
        path: forgotPath,
        component: AuthIndexComponent,
        resolve: {
          page: AuthPageResolver
        },
        data: {
          pageId: 'forgotPage'
        },
      }, {
        path: signInPath,
        component: AuthIndexComponent,
        resolve: {
          page: AuthPageResolver
        },
        data: {
          pageId: 'signInPage'
        },
      }, {
        path: signUpPath,
        component: AuthIndexComponent,
        resolve: {
          page: AuthPageResolver
        },
        data: {
          pageId: 'signUpPage'
        },
      }
    ]),
  ],
  declarations: [AuthPageComponent, AuthIndexComponent],
})
export class AuthModule {}
