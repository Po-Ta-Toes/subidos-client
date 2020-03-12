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

const addHandlers = function () {
  $('#photo-create').on('submit', onCreatePhoto)
  $('#photo-index').on('click', onIndexPhotos)
}

module.exports = {
  addHandlers
}
