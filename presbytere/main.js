Vue.use(httpVueLoader);

var pages = [
  "header",
  "pages/homepage",
  "menu"
];

var availableLanguages = [ "fr", "en" ];

var i18n = new VueI18n({
    locale: Intl.UserLanguage(window.navigator.languages, availableLanguages),
    fallbackLocale: 'fr',
    messages: Intl.BuildResources(pages, availableLanguages)
});

var app = new Vue({
    el: '#lodging',
    i18n,
    data: {
    },
    components: {
      'header-vue': 'url:./components/header.vue',
      'body-vue': 'url:./components/menu.vue',
    }
});