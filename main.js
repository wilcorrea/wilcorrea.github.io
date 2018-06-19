const App = {
  /**
   *
   */
  run () {
    let locale = get('l')
    if (!locale) {
      return window.location.href = window.location.href + '?l=en_US'
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
