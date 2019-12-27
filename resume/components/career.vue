<template>
  <div>
    <simplelist type="abstract"
      :option="option" 
      :items="value.abstracts"></simplelist>
    <evaluationlist type="skills"
      :option="option" 
      :evaluations="value.skills"></evaluationlist>
    <evaluationlist type="various"
      :option="option" 
      :evaluations="value.various"></evaluationlist>
    <cardlist type="experiences"
      :option="option" 
      :cards="value.experiences"></cardlist>
    <cardlist type="studies"
      :option="option" 
      :cards="value.studies"></cardlist>
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