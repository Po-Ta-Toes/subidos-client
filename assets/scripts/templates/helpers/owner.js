'use strict'
const config = require('../../config')
const store = require('../../store')

const getUser = function (id) {
  return $.ajax({
    url: config.apiUrl + '/users/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const returnUser = function (id) {
  getUser(id)
    .then(user => user.email)
    .catch(console.err) // need to change later!
}

module.exports = returnUser
