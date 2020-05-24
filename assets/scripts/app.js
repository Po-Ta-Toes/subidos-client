'use strict'

const authEvents = require('./auth/events')
const photoEvents = require('./photo/events')
const navEvents = require('./nav/events')

$(() => {
  authEvents.addHandlers()
  photoEvents.addHandlers()
  navEvents.addHandlers()
})
