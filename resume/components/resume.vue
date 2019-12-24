<template>
  <div>
    <abstract></abstract>
    <cardlist type="experiences"
      v-bind:option="option" 
      v-bind:cards="resume.experiences"></cardlist>
    <cardlist type="competencies"
      v-bind:option="option" 
      v-bind:cards="resume.competencies"></cardlist>
    <cardlist type="studies"
      v-bind:option="option" 
      v-bind:cards="resume.studies"></cardlist>
  </div>
</template>

<script>
    module.exports = {
      props: ['resume', 'option'],
      components: {
        'cardlist': 'url:./cardlist.vue',
        'abstract': 'url:./empty.vue',
      }
    }
</script>