import Vue from 'vue'
import VueI18n from 'vue-i18n'


import enLocale from './en'
import zhLocale from './zh'

Vue.use(VueI18n)
Vue.locale = () => {}

const messages = {
  en: {
    ...enLocale
  },
  zh: {
    ...zhLocale
  }
}

var lang = navigator.language
var lang = lang.substr(0, 2);
const i18n = new VueI18n({
  // set locale
  // options: en or zh
  locale:  lang || 'en',
  // set locale messages
  messages
})

export default i18n
