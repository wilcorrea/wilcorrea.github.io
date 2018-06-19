const App = {
  /**
   * @return {Vue}
   */
  run () {
    let locale = get('l')
    if (!locale) {
      return browse(locale)
    }
    if (typeof settings === 'undefined') {
      settings = {}
    }
    return this.build(
      '#app',
      locale,
      settings.avatar || '',
      settings.i18n || {},
      settings.social || []
    )
  },
  /**
   * @param {string} el
   * @param {string} locale
   * @param {string} avatar
   * @param {Object} i18n
   * @param {Array} social
   *
   * @return {Vue}
   */
  build (el, locale, avatar, i18n, social) {
    const data = {
      locale,
      avatar,
      i18n,
      social
    }
    return new Vue({
      el: el,
      data: () => data,
      methods: {
        lang (index) {
          if (!this.i18n[this.locale]) {
            return
          }
          const lang = this.i18n[this.locale]
          if (!lang[index]) {
            return
          }
          return lang[index]
        },
        browse (locale) {
          browse(locale)
        }
      },
      created () {
        if (!locale) {
          locale = 'en_US'
        }
        this.locale = locale
      }
    })
  }
}