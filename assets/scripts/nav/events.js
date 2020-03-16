'use strict'

const toSignIn = function () {
  $('#sign-in').removeClass('hidden')
  $('#sign-up').addClass('hidden')
}

const toSignUp = function () {
  $('#sign-up').removeClass('hidden')
  $('#sign-in').addClass('hidden')
}

const addHandlers = function () {
  $('.signin-nav').on('click', toSignIn)
  $('.signup-nav').on('click', toSignUp)
}

module.exports = {
  addHandlers
}
