'use strict'

const store = require('../store')

const onSignUpSuccess = function (response) {
  // $('#show-modal-body').empty()
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#signup-modal').modal('hide')
  $('#signin-modal').modal('show')
}

const onSignUpFailure = function (response) {
  $('#signup-message').text('sign up failure')
  $('#sign-up').trigger('reset')
}

const onSignInSuccess = function (response) {
  $('#show-modal-body').empty()
  $('#signin-modal').modal('hide')
  $('.title-content').addClass('hidden')
  $('.main-content').removeClass('hidden').css('display', 'flex')
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
  store.user = null // wipes signed-in users data clean
  $('.modal').modal('hide')
  $('#show-modal-body').empty()
  // $('#change-pw').trigger('reset')
  $('.main-content').css('display', 'none')
  $('.title-content').removeClass('hidden')
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
