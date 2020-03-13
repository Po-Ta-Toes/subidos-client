'use strict'
const indexPhotosTemplate = require('../templates/index-display.handlebars')
const showPhotoTemplate = require('../templates/show-display.handlebars')
const store = require('../store')

const onCreatePhotoSuccess = function (data) {
  $('#nav-message').text('Create Photo Success')
  $('#photo-create').trigger('reset')
}

const onCreatePhotoFailure = function (data) {
  $('#nav-message').text('Create Photo Failure')
  $('#photo-create').trigger('reset')
}

const onIndexPhotosSuccess = function (data) {
  $('#nav-message').text('Received photos')
  console.log(data)
  const indexPhotosHTML = indexPhotosTemplate({ photos: data.photos })
  $('#index-wrapper').html(indexPhotosHTML)
}

const onIndexPhotosFailure = function (data) {
  $('#nav-message').text('Create Photo Failure')
}

const onShowPhotoSuccess = function (data) {
  $('#show-photo-modal').modal()
  const showPhotoHTML = showPhotoTemplate({ photo: data.photo })
  $('.modal-body').html(showPhotoHTML)
}

const onShowPhotoFailure = function (data) {
  console.log('failure: ', data)
}

module.exports = {
  onCreatePhotoSuccess,
  onCreatePhotoFailure,
  onIndexPhotosSuccess,
  onIndexPhotosFailure,
  onShowPhotoSuccess,
  onShowPhotoFailure
}
