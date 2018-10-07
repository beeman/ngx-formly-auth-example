import { Field } from '../../forms/helpers'

export interface AuthLink {
  label: string
  link: string | string[]
}

export interface AuthButton {
  type: string
  label: string
  class: 'success' | 'warning' | 'primary' | 'secondary' | 'danger'
  action: string
}

export interface AuthPage {
  title: string
  path: string
  fields: Field[]
  buttons: AuthButton[]
  links: AuthLink[]
}
