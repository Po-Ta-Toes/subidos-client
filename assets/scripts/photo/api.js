'use strict'

const config = require('../config')
const store = require('../store')

const createPhoto = data => {
  return $.ajax({
    url: config.apiUrl + '/photos',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    contentType: false,
    processData: false,
    data
  })
}

module.exports = {
  createPhoto
}
