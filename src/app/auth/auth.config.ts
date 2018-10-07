import { Field } from '../forms/'
import { AuthButton, AuthLink, AuthPage } from './models'

// Define the fields
const emailField = Field.email('email', {
  placeholder: 'Email',
  required: true,
})
const passwordField = Field.password('password', {
  placeholder: 'Password',
})
const nameField = Field.input('name', {
  label: 'Name',
  placeholder: 'Name',
  required: true,
})

// Define the buttons
const signUpButton: AuthButton = {
  type: 'submit',
  class: 'success',
  label: 'SIGN UP',
  action: 'SIGN_UP',
}
const signInButton: AuthButton = {
  type: 'submit',
  class: 'success',
  label: 'SIGN IN',
  action: 'SIGN_IN',
}
const resetButton: AuthButton = {
  type: 'submit',
  class: 'success',
  label: 'RESET PASSWORD',
  action: 'RESET_PASSWORD',
}

// Define the route paths
export const signUpPath = 'sign-up'
export const signInPath = 'sign-in'
export const forgotPath = 'forgot'

// Define the links
const signUpLink: AuthLink = {
  label: 'SIGN UP',
  link: ['..', signUpPath]
}
const signInLink: AuthLink = {
  label: 'SIGN IN',
  link: ['..', signInPath]
}
const forgotLink: AuthLink = {
  label: 'FORGOT PASSWORD?',
  link: ['..', forgotPath],
}

// Define the pages
const forgotPage: AuthPage = {
  title: 'FORGOT PASSWORD',
  path: forgotPath,
  fields: [emailField],
  buttons: [resetButton],
  links: [signInLink, signUpLink],
}
const signInPage: AuthPage = {
  title: 'SIGN IN',
  path: signInPath,
  fields: [emailField, passwordField],
  buttons: [signInButton],
  links: [forgotLink, signUpLink],
}
const signUpPage: AuthPage = {
  title: 'SIGN UP',
  path: signUpPath,
  fields: [nameField, emailField, passwordField],
  buttons: [signUpButton],
  links: [forgotLink, signInLink],
}

export const authPages = {
  forgotPage,
  signInPage,
  signUpPage,
}
