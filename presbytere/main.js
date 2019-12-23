var userLanguage = function(languages, availables){
  var languageNotFound = true;
  var language = languages[0];
  var i = 0;
  while(languageNotFound && i < languages.length){
    var preferedLanguage = languages[i++];

    for (var j = 0; j < availables.length && languageNotFound; j++) {
      if(preferedLanguage.startsWith(availables[j])){
        language = availables[j];
        languageNotFound = false;
      }
    }
  }

  return language;
}

var buildResources = function(pages, languages){
  var resources = {};

  pages.forEach(page => {
    languages.forEach(language => {
      $.ajax("components/" + page + "." + language + ".json").done(function(currentPageResource) {
        var r = $.extend(true, resources, currentPageResource);
      })
    })
  });

  return resources;
}

Vue.use(httpVueLoader);

var pages = [
  "header",
  "pages/homepage",
  "menu"
];

var availableLanguages = [ "fr", "en" ];

var i18n = new VueI18n({
    locale: userLanguage(window.navigator.languages, availableLanguages),
    fallbackLocale: 'fr',
    messages: buildResources(pages, availableLanguages)
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