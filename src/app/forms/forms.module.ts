import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

import { FormlyModule } from '@ngx-formly/core'
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap'

import { FormComponent } from './components/form/form.component'

import { config } from './formly.config'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(config),
    FormlyBootstrapModule,
  ],
  exports: [
    ReactiveFormsModule,
    FormlyModule,
    FormlyBootstrapModule,
    FormComponent,
  ],
  declarations: [FormComponent],
})
export class FormsModule {}
