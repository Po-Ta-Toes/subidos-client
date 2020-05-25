'use strict'
const indexPhotosTemplate = require('../templates/index-display.handlebars')
const showPhotoTemplate = require('../templates/show-display.handlebars')
const showOwnedPhotoTemplate = require('../templates/show-display-owned.handlebars')
const store = require('../store')

const onCreatePhotoSuccess = function (data) {
  $('#upload-message').text('Create Photo Success').css('color', 'green')
  $('#photo-create').trigger('reset')
  // hide loader image
  $('.loader').addClass('hidden')
}

const onCreatePhotoFailure = function (data) {
  $('#upload-message').text('Create Photo Failure').css('color', 'red')
  $('#photo-create').trigger('reset')
  // hide loader image
  $('.loader').addClass('hidden')
}

const onIndexPhotosSuccess = function (data) {
  const indexPhotosHTML = indexPhotosTemplate({ photos: data.photos })
  $('#index-wrapper').html(indexPhotosHTML)
  // hide loader image
  $('.loader').addClass('hidden')
}

const onIndexPhotosFailure = function (data) {
  $('#index-message').text('Could not load photos').css('color', 'red')
  // hide loader image
  $('.loader').addClass('hidden')
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
  // hide loader image
  $('.loader').addClass('hidden')
}

const onShowPhotoFailure = function (data) {
  $('#index-message').text('Could not show image, please try again later').css('color', 'red')
  // hide loader image
  $('.loader').addClass('hidden')
}

const onUpdatePhotoSuccess = function (data) {
  $('#nav-message').text('Update Photo Success').css('color', 'green')
  $('#show-photo-modal').modal('hide')
  // hide loader image
  $('.loader').addClass('hidden')
}

const onUpdatePhotoFailure = function (data) {
  $('#nav-message').text('Update Photo Failure').css('color', 'red')
  // hide loader image
  $('.loader').addClass('hidden')
}

const onDeletePhotoSuccess = function (data) {
  $('#nav-message').text('Delete Successful').css('color', 'green')
  $('#show-photo-modal').modal('hide')
  // hide loader image
  $('.loader').addClass('hidden')
}

const onDeletePhotoFailure = function (data) {
  $('#nav-message').text('Could not delete image, please try again later').css('color', 'red')
  $('#show-photo-modal').modal('hide')
  // hide loader image
  $('.photo-loader').addClass('hidden')
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
