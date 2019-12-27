<template>
  <div>
    <h3 v-if="evaluation.values != undefined && evaluation.values.length > 0">
      <smartext :option="option" :value="evaluation.title" ></smartext>
    </h3>
    <simplelist 
      :option="option" 
      :items="evaluation.values"
      type="type"
      #default="{ item: value }">
      <smartext :class="value.key" :option="option" :value="value.title"></smartext>
      <grade :option="option" :value="value.gradeOutofFive"></grade>
    </simplelist>
  </div>
</template>

<script>
    module.exports = {
      props: ['type', 'option', 'evaluation'],
      components: {
        'simplelist': 'url:./simplelist.vue',
        'smartext': 'url:./smart-paragraph.vue',
        'grade': 'url:./grade-out-of-five.vue'
      }
    }
</script>