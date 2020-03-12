'use strict'

const authApi = require('./api')
const authUi = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onSignUp = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  authApi.signUp(formData)
    .then(authUi.onSignUpSuccess)
    .catch(authUi.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  authApi.signIn(formData)
    .then(authUi.onSignInSuccess)
    .catch(authUi.onSignInFailure)
}

const onChangePw = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  authApi.changePw(formData)
    .then(authUi.onChangePwSuccess)
    .catch(authUi.onChangePwFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  authApi.signOut()
    .then(authUi.onSignOutSuccess)
    .catch(authUi.onSignOutFailure)
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-pw').on('submit', onChangePw)
  $('#sign-out').on('submit', onSignOut)
}

module.exports = {
  addHandlers
}
