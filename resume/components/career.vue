<template>
  <div>
    <simplelist type="abstract"
      v-bind:option="option" 
      v-bind:items="value.abstracts"></simplelist>
    <evaluationlist type="skills"
      v-bind:option="option" 
      v-bind:evaluations="value.skills"></evaluationlist>
    <evaluationlist type="various"
      v-bind:option="option" 
      v-bind:evaluations="value.various"></evaluationlist>
    <cardlist type="experiences"
      v-bind:option="option" 
      v-bind:cards="value.experiences"></cardlist>
    <cardlist type="studies"
      v-bind:option="option" 
      v-bind:cards="value.studies"></cardlist>
  </div>
</template>

<script>
    module.exports = {
      props: ['value', 'option'],
      components: {
        'cardlist': 'url:./cardlist.vue',
        'simplelist': 'url:./simplelist.vue',
        'evaluationlist': 'url:./evaluationlist.vue',
      }
    }
</script>