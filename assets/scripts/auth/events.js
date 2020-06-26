'use strict'

const authApi = require('./api')
const authUi = require('./ui')
const store = require('../store')
const photoEvents = require('../photo/events')
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
    .then(response => {
      store.user = response.user
      authUi.onSignInSuccess(response)
    })
    .then(photoEvents.onIndexPhotos)
    .catch(authUi.onSignInFailure)
}

const onGuestSignIn = function () {
  const data = {
    'credentials': {
      'email': 'guest@email.com',
      'password': 'zowpt7rv4fj'
    }
  }
  authApi.signIn(data)
    .then(response => {
      store.user = response.user
      authUi.onGuestSignInSuccess(response)
    })
    .then(photoEvents.onIndexPhotos)
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
    .then(response => {
      store.user = null
      authUi.onSignOutSuccess(response)
    })
    .catch(authUi.onSignOutFailure)
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('.guest-signin').on('click', onGuestSignIn)
  $('.main-content').on('submit', '#change-pw', onChangePw)
  $('.main-content').on('click', '#sign-out', onSignOut)
}

module.exports = {
  addHandlers
}
