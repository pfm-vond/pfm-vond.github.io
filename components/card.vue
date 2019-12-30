<template>
  <div :class="CssClass()">
    <h3>
      <smartext :option="option" :value="card.title"></smartext>
    </h3>
    <organisation :value="card.organisation"></organisation>
    <period :period="card.period"></period>
    <smartext :option="option" :value="card.description"></smartext>
  </div>
</template>

<script>
    module.exports = {
      props: ['type', 'card', 'option'],
      methods: {
        CssClass(){
          var classes = [ 'resume-card' ];

          if(this.card.print && this.card.print.pageBreakAfter === 'always')
          {
            classes.push('page-break-after')
          }

          return classes.join(" ");
        }
      },
      components: {
        'period': 'url:./period.vue',
        'smartext': 'url:./smart-paragraph.vue',
        'organisation': 'url:./organisation.vue',
      }
    }
</script>