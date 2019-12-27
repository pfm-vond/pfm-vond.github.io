<template>
  <div :class="cssclass"
    v-if="evaluations != undefined
    && evaluations.values != undefined
    && evaluations.values.length > 0">
    
    <h2><smartext :option="option" :value="evaluations.title"></smartext></h2>
    <ul>
      <li :key="evaluation.key" v-for="evaluation in evaluations.values">
        <evaluation 
          :type="type" 
          :option="option" 
          :evaluation="evaluation"></evaluation>
      </li>
    </ul>
  </div>
</template>

<script>
    module.exports = {
      props: ['type', 'option', 'evaluations'],      
      data: function(){
        return {
          cssclass: this.type + " evaluationlist"
        }
      },
      components: {
        'evaluation': 'url:./evaluation.vue',
        'smartext': 'url:./smart-paragraph.vue'
      }
    }
</script>