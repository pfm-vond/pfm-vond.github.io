var availableLang = [ "en", "fr" ];

var app = new Vue({
  el: '#resume',
  i18n: Intl.Vue([
      "location",
      "organisation",
      "studies",
      "experiences",
      "skills",
      "various",
      "abstracts",
      "common",
      "identity"
    ],
    availableLang),
  data: {
    option: {
      availableLang,
      abstract: 'left',  
      grade: 'hidden',
      version: {
        value: 'common.version.full',
        config: [
          {
            key: 'common.version.full',
            abstract: true
          },
          {
            key: 'common.version.short',
            abstract: false,
            skills: 'short',
            experiences: 'short',
            various: false,
            studies: false
          }
        ]
      }
    },
    resume: Json.Fusion("content/", [
      "studies",
      "experiences",
      "skills",
      "various",
      "abstracts",
      "identity"
    ])
  },
  components: {
    'resume': 'url:./components/resume.vue',
  }
});