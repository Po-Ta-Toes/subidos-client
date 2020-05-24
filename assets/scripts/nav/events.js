'use strict'

const toSignIn = function () {
  $('#sign-in').removeClass('hidden')
  $('#sign-up').addClass('hidden')
}

const toSignUp = function () {
  $('#sign-up').removeClass('hidden')
  $('#sign-in').addClass('hidden')
}

const closeNav = function () {
  $('.side-nav').addClass('hidden')
  $('.log-section').css('left', '0')
  $('.open').removeClass('hidden')
}

const openNav = function () {
  $('.side-nav').removeClass('hidden')
  $('.log-section').css('left', '23rem')
  $('.open').addClass('hidden')
}

const addHandlers = function () {
  $('.signin-nav').on('click', toSignIn)
  $('.signup-nav').on('click', toSignUp)
  $('.main-content').on('click', '.close', closeNav)
  $('.main-content').on('click', '.open', openNav)
}

module.exports = {
  addHandlers
}
