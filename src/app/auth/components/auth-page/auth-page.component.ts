import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { AuthPage } from '../../models'

@Component({
  selector: 'app-auth-base',
  templateUrl: './auth-page.component.html',
})
export class AuthPageComponent {
  @Input() public form = new FormGroup({})
  @Input() public model: any = {}
  @Input() public page: AuthPage
  @Output() public action = new EventEmitter()
}
