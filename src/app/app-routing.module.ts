import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    loadChildren: './auth/auth.module#AuthModule',
  },
]
