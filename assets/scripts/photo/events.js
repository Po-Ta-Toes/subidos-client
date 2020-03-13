'use strict'

const api = require('./api')
const ui = require('./ui')

const onCreatePhoto = function (event) {
  event.preventDefault()

  const formData = new FormData(event.target)

  api.createPhoto(formData)
    .then(ui.onCreatePhotoSuccess)
    .catch(ui.onCreatePhotoFailure)
}

const onIndexPhotos = function (event) {
  event.preventDefault()
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
  console.log(event.target)
}

const addHandlers = function () {
  $('#photo-create').on('submit', onCreatePhoto)
  $('#photo-index').on('click', onIndexPhotos)
  $('#index-wrapper').on('click', '.selector', onShowPhoto)
  $('#show-photo-modal').on('click', '.update-btn', onUpdatePhoto)
}

module.exports = {
  addHandlers
}
