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
  const origin = window.location.origin
  const pathname = window.location.pathname
  return window.location.href = origin + pathname + '?l=' + locale
}

