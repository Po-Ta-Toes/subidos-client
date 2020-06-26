'use strict'

const mainContentTemplate = require('../templates/main-content.handlebars')

const onSignUpSuccess = function (response) {
  $('#signup-message').text('')
  $('#signin-message').text('Sign Up Success').css('color', 'green')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#sign-in').removeClass('hidden')
  $('#sign-up').addClass('hidden')
  // hide loader image
  $('.loader').addClass('hidden')
}

const onSignUpFailure = function (response) {
  $('#signup-message').text('Sign Up Failure').css('color', 'red')
  $('#sign-up').trigger('reset')
  // hide loader image
  $('.loader').addClass('hidden')
}

const onSignInSuccess = function (response) {
  $('.title-content').addClass('hidden')
  const mainContentHtml = mainContentTemplate()
  $('.main-content').html(mainContentHtml)
  $('#signin-message').text('')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  // hide loader image
  $('.loader').addClass('hidden')
}

const onGuestSignInSuccess = function (response) {
  onSignInSuccess(response)
  $('#change-pw').addClass('hidden')
}

const onSignInFailure = function (response) {
  $('#signin-message').text('Sign In Failure').css('color', 'red')
  $('#sign-in').trigger('reset')
  // hide loader image
  $('.loader').addClass('hidden')
}

const onChangePwSuccess = function (response) {
  $('#pw-message').text('Change Password Success').css('color', 'green')
  $('#change-pw').trigger('reset')
  // hide loader image
  $('.loader').addClass('hidden')
}

const onChangePwFailure = function (response) {
  $('#pw-message').text('Change Password Failure').css('color', 'red')
  $('#change-pw').trigger('reset')
  // hide loader image
  $('.loader').addClass('hidden')
}

const onSignOutSuccess = function (response) {
  $('.title-content').removeClass('hidden')
  $('.main-content').empty()
  $('#signout-message').text('')
  $('#change-pw').trigger('reset')
  // hide loader image
  $('.loader').addClass('hidden')
  // reveal change pw form in case of guest user
  $('#change-pw').removeClass('hidden')
}

const onSignOutFailure = function (response) {
  $('#signout-message').text('Error: Account Still Active').css('color', 'red')
  // hide loader image
  $('.loader').addClass('hidden')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onGuestSignInSuccess,
  onChangePwSuccess,
  onChangePwFailure,
  onSignOutSuccess,
  onSignOutFailure
}
