'use strict'
const indexPhotosTemplate = require('../templates/index-display.handlebars')
const showPhotoTemplate = require('../templates/show-display.handlebars')
const showOwnedPhotoTemplate = require('../templates/show-display-owned.handlebars')
const store = require('../store')
const events = require('./events')

const onCreatePhotoSuccess = function (data) {
  $('#upload-message').text('Create Photo Success').css('color', 'green')
  $('#photo-create').trigger('reset')
}

const onCreatePhotoFailure = function (data) {
  $('#upload-message').text('Create Photo Failure').css('color', 'red')
  $('#photo-create').trigger('reset')
}

const onIndexPhotosSuccess = function (data) {
  const indexPhotosHTML = indexPhotosTemplate({ photos: data.photos })
  $('#index-wrapper').html(indexPhotosHTML)
}

const onIndexPhotosFailure = function (data) {
  $('#index-message').text('Create Photo Failure').css('color', 'red')
}

const onShowPhotoSuccess = function (data) {
  $('.message').text('')
  $('#show-photo-modal').modal()
  let showPhotoHTML
  if (store.user._id === data.photo.owner._id) {
    showPhotoHTML = showOwnedPhotoTemplate({ photo: data.photo })
  } else {
    showPhotoHTML = showPhotoTemplate({ photo: data.photo })
  }
  $('.modal-content').html(showPhotoHTML)
}

const onShowPhotoFailure = function (data) {
  $('#index-message').text('Could not show image, please try again later').css('color', 'red')
}

const onUpdatePhotoSuccess = function (data) {
  $('#nav-message').text('Update Photo Success').css('color', 'green')
  $('#show-photo-modal').modal('hide')
  events.indexPhotos()
}

const onUpdatePhotoFailure = function (data) {
  $('#nav-message').text('Update Photo Failure').css('color', 'red')
}

const onDeletePhotoSuccess = function (data) {
  $('#nav-message').text('Delete Successful').css('color', 'green')
  $('#show-photo-modal').modal('hide')
}

const onDeletePhotoFailure = function (data) {
  $('#nav-message').text('Could not delete image, please try again later').css('color', 'red')
  $('#show-photo-modal').modal('hide')
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
