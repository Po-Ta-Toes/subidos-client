'use strict'

const shortenName = str => {
  if (str.length >= 18) {
    return str.slice(0, 15) + '...'
  } else {
    return str
  }
}

module.exports = shortenName
