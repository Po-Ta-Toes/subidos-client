'use strict'

const config = require('../config')
const store = require('../store')

const createPhoto = data => {
  $('.photo-loader').removeClass('hidden')
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
  $('.index-loader').removeClass('hidden')
  return $.ajax({
    url: config.apiUrl + '/photos',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const showPhoto = function (id) {
  $('.photo-loader').removeClass('hidden')
  return $.ajax({
    url: config.apiUrl + '/photos/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updatePhoto = function (data, id) {
  $('.photo-loader').removeClass('hidden')
  return $.ajax({
    url: config.apiUrl + '/photos/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

const deletePhoto = function (id) {
  $('.photo-loader').removeClass('hidden')
  return $.ajax({
    url: config.apiUrl + '/photos/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  createPhoto,
  indexPhotos,
  showPhoto,
  updatePhoto,
  deletePhoto
}
