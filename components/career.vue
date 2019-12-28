<template>
  <div>
    <simplelist 
      v-if="version().abstract !== false" 
      type="abstract"
      :option="option" 
      :items="value.abstracts"></simplelist>
    <evaluationlist
      v-if="version().skills !== false" 
      type="skills"
      :option="option" 
      :evaluations="value.skills"></evaluationlist>
    <evaluationlist
      v-if="version().various !== false" 
      type="various"
      :option="option" 
      :evaluations="value.various"></evaluationlist>
    <cardlist
      v-if="version().experiences !== false" 
      type="experiences"
      :option="option" 
      :cards="value.experiences"></cardlist>
    <cardlist
      v-if="version().studies !== false" 
      type="studies"
      :option="option" 
      :cards="value.studies"></cardlist>
  </div>
</template>

<script>
    module.exports = {
      props: ['value', 'option'],
      methods: {
          version()
          {
              return this.option.version.config
                .find(c => c.key === this.option.version.value)
          }
      },
      components: {
        'cardlist': 'url:./cardlist.vue',
        'simplelist': 'url:./simplelist.vue',
        'evaluationlist': 'url:./evaluationlist.vue',
      }
    }
</script>