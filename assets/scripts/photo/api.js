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

const indexPhotos = function () {
  return $.ajax({
    url: config.apiUrl + '/photos',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const showPhoto = function (id) {
  return $.ajax({
    url: config.apiUrl + '/photos/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  createPhoto,
  indexPhotos,
  showPhoto
}
