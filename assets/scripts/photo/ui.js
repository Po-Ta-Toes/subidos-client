'use strict'
const indexPhotosTemplate = require('../templates/index-display.handlebars')
const showPhotoTemplate = require('../templates/show-display.handlebars')
const showOwnedPhotoTemplate = require('../templates/show-display-owned.handlebars')
const store = require('../store')
const events = require('./events')

const onCreatePhotoSuccess = function (data) {
  $('#nav-message').text('Create Photo Success')
  $('#photo-create').trigger('reset')
}

const onCreatePhotoFailure = function (data) {
  $('#nav-message').text('Create Photo Failure')
  $('#photo-create').trigger('reset')
}

const onIndexPhotosSuccess = function (data) {
  // $('#nav-message').text('Received photos')
  const indexPhotosHTML = indexPhotosTemplate({ photos: data.photos })
  $('#index-wrapper').html(indexPhotosHTML)
}

const onIndexPhotosFailure = function (data) {
  $('#nav-message').text('Create Photo Failure')
}

const onShowPhotoSuccess = function (data) {
  $('#show-photo-modal').modal()
  let showPhotoHTML
  if (store.user._id === data.photo.owner._id) {
    showPhotoHTML = showOwnedPhotoTemplate({ photo: data.photo })
  } else {
    showPhotoHTML = showPhotoTemplate({ photo: data.photo })
  }
  $('.modal-content').html(showPhotoHTML)
}

const onUpdatePhotoSuccess = function (data) {
  $('#nav-message').text('Update Photo Success')
  $('#show-photo-modal').modal('hide')
  events.indexPhotos()
}

const onUpdatePhotoFailure = function (data) {
  $('#nav-message').text('Update Photo Failure')
}

const onShowPhotoFailure = function (data) {
  console.log('failure: ', data)
}

const onDeletePhotoSuccess = function (data) {
  $('#nav-message').text('Delete successful')
  $('#show-photo-modal').modal('hide')
  events.indexPhotos()
}

const onDeletePhotoFailure = function (data) {
  console.log('failure: ', data)
}

module.exports = {
  onCreatePhotoSuccess,
  onCreatePhotoFailure,
  onIndexPhotosSuccess,
  onIndexPhotosFailure,
  onShowPhotoSuccess,
  onShowPhotoFailure,
  onUpdatePhotoSuccess,
  onUpdatePhotoFailure,
  onDeletePhotoSuccess,
  onDeletePhotoFailure
}
