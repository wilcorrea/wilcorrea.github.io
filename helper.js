/**
 * @param {string} locale
 *
 * @return {string}
 */
function get (name) {
  const url = window.location.href
  name = name.replace(/[\[\]]/g, '\\$&')
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
  const results = regex.exec(url)
  if (!results) {
    return null
  }
  if (!results[2]) {
    return ''
  }
  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

/**
 * @param {string} locale
 *
 * @return {boolean}
 */
function browse (locale) {
  return window.location.href = window.location.href + '?l=' + locale
}

