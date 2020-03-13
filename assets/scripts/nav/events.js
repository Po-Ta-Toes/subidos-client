'use strict'

const openSignUp = function () {
  console.log('yep')
  $('#signup-modal').modal()
}

const openSignIn = function () {
  $('#signin-modal').modal()
}

// could not get this to work - why?
// if time, add 'hidden' back to #change-pw, uncomment, and trouble shoot?
// const openChangePw = function () {
//   $('#change-pw').removeClass('hidden')
//   $('#pw-btn').addClass('hidden')
//   console.log('yep')
// }

const addHandlers = function () {
  $('#signup-btn').on('click', openSignUp)
  $('#signin-btn').on('click', openSignIn)
  // $('#pw-btn').on('click', openChangePw)
}

module.exports = {
  addHandlers
}
