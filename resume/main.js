Vue.use(httpVueLoader);

var messages = {
    en: {
      abstract: {
        subtitle: 'Aware of light speed limitation and its impact :)',
      }
    },
    fr: {
        abstract: {
            subtitle: 'Conscient des limites de la vitesse de la lumiere et de ces impacts :)',
      }
    }
  }


var i18n = new VueI18n({
    locale: "fr",
    messages
});

var app = new Vue({
    el: '#resume',
    i18n,
    data: {
    },
    components: {
        'abstract': 'url:./components/abstract.vue'
    }
});