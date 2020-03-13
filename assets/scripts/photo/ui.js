'use strict'
const indexPhotosTemplate = require('../templates/index-display.handlebars')
const showPhotoTemplate = require('../templates/show-display.handlebars')
const showOwnedPhotoTemplate = require('../templates/show-display-owned.handlebars')
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
  const indexPhotosHTML = indexPhotosTemplate({ photos: data.photos })
  $('#index-wrapper').html(indexPhotosHTML)
}

const onIndexPhotosFailure = function (data) {
  $('#nav-message').text('Create Photo Failure')
}

const onShowPhotoSuccess = function (data) {
  $('#show-photo-modal').modal()
  let showPhotoHTML
  // console.log(store.user)
  // console.log(data.photo.owner)
  // console.log(store.user._id === data.photo.owner._id)
  if (store.user._id === data.photo.owner) {
    showPhotoHTML = showOwnedPhotoTemplate({ photo: data.photo })
  } else {
    showPhotoHTML = showPhotoTemplate({ photo: data.photo })
  }
  $('.modal-content').html(showPhotoHTML)
}

const onUpdatePhotoSuccess = function (data) {
  $('#nav-message').text('Update Photo Success')
}

const onUpdatePhotoFailure = function (data) {
  $('#nav-message').text('Update Photo Failure')
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
  onShowPhotoFailure,
  onUpdatePhotoSuccess,
  onUpdatePhotoFailure
}