'use strict'

const store = require('../store')

const onSignUpSuccess = function (response) {
  $('#sign-up-message').text('sign up success')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
}

const onSignUpFailure = function (response) {
  $('#sign-up-message').text('sign up failure')
  $('#sign-up').trigger('reset')
}

const onSignInSuccess = function (response) {
  $('#signin-modal').modal('hide')
  $('.sign-in-wrapper').addClass('hidden')
  $('.main-content').removeClass('hidden').css('display', 'flex')
  store.user = response.user
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
}

const onSignInFailure = function (response) {
  $('#sign-up-message').text('sign in failure')
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
  $('#signout-modal').modal('hide')
  $('#sign-up-message').text('sign out success')
  $('.sign-in-wrapper').removeClass('hidden')
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
