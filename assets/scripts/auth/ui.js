'use strict'

const store = require('../store')

const onSignUpSuccess = function (response) {
  $('#sign-up-message').text('sign up success')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#sign-in').removeClass('hidden')
  $('#sign-up').addClass('hidden')
}

const onSignUpFailure = function (response) {
  $('#signup-message').text('sign up failure')
  $('#sign-up').trigger('reset')
}

const onSignInSuccess = function (response) {
  $('.title-content').addClass('hidden')
  $('.main-content').removeClass('hidden')
  store.user = response.user
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
}

const onSignInFailure = function (response) {
  $('#signin-message').text('sign in failure')
  $('#sign-in').trigger('reset')
}

const onChangePwSuccess = function (response) {
  $('#nav-message').text('change pw success')
  $('#change-pw').trigger('reset')
}

const onChangePwFailure = function (response) {
  $('#nav-message').text('change pw failure')
  $('#change-pw').trigger('reset')
}

const onSignOutSuccess = function (response) {
  $('.title-content').removeClass('hidden')
  $('.main-content').addClass('hidden')
  $('#change-pw').trigger('reset')
}

const onSignOutFailure = function (response) {
  $('#nav-message').text('sign out failure')
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
