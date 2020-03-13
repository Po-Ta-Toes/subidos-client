'use strict'
const store = require('../../store')

// have to populate the photo before using function
const ownsPhoto = function (photo) {
  return photo.owner._id === store.user._id
}

module.exports = ownsPhoto
