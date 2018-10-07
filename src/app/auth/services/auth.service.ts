import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  handleAuth({ type, payload }) {
    console.log({ type, payload })
  }
}
