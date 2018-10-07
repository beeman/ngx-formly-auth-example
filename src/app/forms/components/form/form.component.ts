import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { FormlyFieldConfig, FormlyFormBuilder } from '@ngx-formly/core'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  @Input() public fields: FormlyFieldConfig[]
  @Input() public form: FormGroup
  @Input() public model = {}
  @Input() public options = {}
  @Output() public handleSubmit = new EventEmitter()

  constructor(private builder: FormlyFormBuilder) {}

  ngOnInit() {
    this.builder.buildForm(this.form, this.fields, this.model, this.options)
  }

  submit() {
    this.handleSubmit.emit({ type: 'SUBMIT', payload: this.model })
  }
}
