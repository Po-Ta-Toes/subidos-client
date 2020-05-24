'use strict'

const config = require('../config')
const store = require('../store')

const signUp = userData => {
  $('.loader').removeClass('hidden')
  return $.ajax({
    url: `${config.apiUrl}/sign-up`,
    method: 'POST',
    data: userData
  })
}

const signIn = userData => {
  $('.loader').removeClass('hidden')
  return $.ajax({
    url: `${config.apiUrl}/sign-in`,
    method: 'POST',
    data: userData
  })
}

const changePw = userData => {
  $('.loader').removeClass('hidden')
  return $.ajax({
    url: `${config.apiUrl}/change-password`,
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    data: userData
  })
}

const signOut = () => {
  $('.loader').removeClass('hidden')
  return $.ajax({
    url: `${config.apiUrl}/sign-out`,
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePw,
  signOut
}
