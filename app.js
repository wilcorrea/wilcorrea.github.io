const App = {
  /**
   * @param {string} el
   *
   * @return {Vue}
   */
  run (el) {
    if (typeof settings === 'undefined') {
      return
    }
    let locale = get('l')
    if (!locale) {
      return browse(settings.locale)
    }
    return this.build(
      el,
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
