import { Component, OnInit } from '@angular/core'
import { AuthService } from '../../services/auth.service'
import { ActivatedRoute } from '@angular/router'
import { map } from 'rxjs/operators'
import { AuthPage } from '../../models'

@Component({
  templateUrl: './auth-index.component.html',
})
export class AuthIndexComponent implements OnInit {
  public page: AuthPage

  constructor(private route: ActivatedRoute, public auth: AuthService) {}

  ngOnInit() {
    this.route.data
      .pipe(map(data => data['page']))
      .subscribe(page => (this.page = page))
  }
}
