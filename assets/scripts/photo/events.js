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

const addHandlers = function () {
  $('#photo-create').on('submit', onCreatePhoto)
}

module.exports = {
  addHandlers
}
