Vue.use(httpVueLoader);

var resourceFiles = [
  "location",
  "organisation",
  "studies"
];

var availableLanguages = [ "en", "fr" ];

var resources = $.extend(true, 
  {}, 
  Intl.BuildResources("resources/", resourceFiles, availableLanguages), 
  {
    en: {
      period: '{from} - {to}',
      since: 'since {date}',
      orgaloc: '{organisation} ({location})',
    },
    fr: {
      since: 'depuis {date}',
    } 
  });

var i18n = new VueI18n({
    locale: Intl.UserLanguage(window.navigator.languages, availableLanguages),
    fallbackLocale: 'en',
    messages: resources,
    dateTimeFormats: {
      'en': {
        short: {
          year: 'numeric', month: 'long'
        },
        long: {
          year: 'numeric', month: 'short', day: 'numeric',
          weekday: 'short', hour: 'numeric', minute: 'numeric'
        }
      },
      'fr': {
        short: {
          year: 'numeric', month: 'long'
        },
        long: {
          year: 'numeric', month: 'short', day: 'numeric',
          weekday: 'short', hour: 'numeric', minute: 'numeric'
        }
      }
    }
});

var app = new Vue({
    el: '#resume',
    i18n,
    data: {
      option: {
        abstract: '',  
        level: '',
      },
      resume: {
        studies: [
          {
            key: "gsa",
            organisation: {
              name: "organisation.google",
              location: "location.london"
            },
            period: {
              from: new Date("2012-06-01"),
              to: new Date("2012-06-01"),
            },
          },
          {
            key: "uqac",
            organisation: {
              name: "organisation.uqac",
              location: "location.quebec"
            },
            period: {
              from: new Date("2010-09-01"),
              to: new Date("2011-12-31"),
            },
          },
          {
            key: "esial",
            organisation: {
              name: "organisation.esial",
              location: "location.nancy"
            },
            period: {
              from: new Date("2008-09-01"),
              to: new Date("2011-11-31"),
            },
          },
          {
            key: "uhp",
            organisation: {
              name: "organisation.uhp",
              location: "location.nancy"
            },
            period: {
              from: new Date("2006-09-01"),
              to: new Date("2008-06-31"),
            },
          },
          {
            key: "highschool",
            organisation: {
              name: "organisation.georgesbaumont",
              location: "location.stdie"
            },
            period: {
              from: new Date("2005-06-01"),
              to: new Date("2005-06-01"),
            },
          }
        ]
      }
    },
    components: {
      'resume': 'url:./components/resume.vue',


      'personal-information': 'url:./components/empty.vue',      
      'studies': 'url:./components/studies.vue',
      'top-personal-information': 'url:./components/empty.vue',
      'left-personal-information': 'url:./components/empty.vue',
      'right-personal-information': 'url:./components/empty.vue',
    }
});