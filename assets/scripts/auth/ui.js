'use strict'

const store = require('../store')

const onSignUpSuccess = function (response) {
  $('#auth-message').text('sign up success')
}

const onSignUpFailure = function (response) {
  $('#auth-message').text('sign up failure')
}

const onSignInSuccess = function (response) {
  $('#auth-message').text('sign in success')
  store.user = response.user
}

const onSignInFailure = function (response) {
  $('#auth-message').text('sign in failure')
}

const onChangePwSuccess = function (response) {
  $('#auth-message').text('change pw success')
}

const onChangePwFailure = function (response) {
  $('#auth-message').text('change pw failure')
}

const onSignOutSuccess = function (response) {
  $('#auth-message').text('sign out success')
}

const onSignOutFailure = function (response) {
  $('#auth-message').text('sign out failure')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePwSuccess,
  onChangePwFailure,
  onSignOutSuccess,
  onSignOutFailure
}
