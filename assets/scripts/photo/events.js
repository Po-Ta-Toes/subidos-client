'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onCreatePhoto = function (event) {
  event.preventDefault()

  const formData = new FormData(event.target)

  api.createPhoto(formData)
    .then(ui.onCreatePhotoSuccess)
    .then(onIndexPhotos)
    .catch(ui.onCreatePhotoFailure)
}

const onIndexPhotos = function (event) {
  if (event) { event.preventDefault() }
  api.indexPhotos()
    .then(ui.onIndexPhotosSuccess)
    .catch(ui.onIndexPhotosFailure)
}

const onShowPhoto = function (event) {
  event.preventDefault()

  const id = $(event.target).data('id')
  api.showPhoto(id)
    .then(ui.onShowPhotoSuccess)
    .catch(ui.onShowPhotoFailure)
}

const onUpdatePhoto = function (event) {
  event.preventDefault()
  const photoId = $(event.target).data('id')
  const formData = getFormFields($(`#form-${photoId}`)[0])
  api.updatePhoto(formData, photoId)
    .then(onIndexPhotos)
    .then(ui.onUpdatePhotoSuccess)
    .catch(ui.onUpdatePhotoFailure)
}

const onDeletePhoto = function (event) {
  event.preventDefault()

  const photoId = $(event.target).data('id')
  api.deletePhoto(photoId)
    .then(onIndexPhotos)
    .then(ui.onDeletePhotoSuccess)
    .catch(ui.onDeletePhotoFailure)
}

const addHandlers = function () {
  $('.main-content').on('submit', '#photo-create', onCreatePhoto)
  // $('#photo-index').on('click', onIndexPhotos)
  $('.main-content').on('click', '.selector', onShowPhoto)
  $('.main-content').on('click', '.update-btn', onUpdatePhoto)
  $('.main-content').on('click', '.delete-btn', onDeletePhoto)
}

module.exports = {
  addHandlers,
  onIndexPhotos
}
