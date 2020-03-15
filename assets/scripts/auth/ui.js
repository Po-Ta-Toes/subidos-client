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
  $('#signin-message').text('sign in failure').css('color', 'red')
  $('#sign-in').trigger('reset')
}

const onChangePwSuccess = function (response) {
  $('#pw-message').text('change pw success').css('color', 'green')
  $('#change-pw').trigger('reset')
}

const onChangePwFailure = function (response) {
  $('#pw-message').text('change pw failure').css('color', 'red')
  $('#change-pw').trigger('reset')
}

const onSignOutSuccess = function (response) {
  $('.title-content').removeClass('hidden')
  $('.main-content').addClass('hidden')
  $('#change-pw').trigger('reset')
}

const onSignOutFailure = function (response) {
  $('#signout-message').text('error: account still active').css('color', 'red')
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
