<template>
  <div :class="cssclass">
    <h2 v-if="evaluations != undefined && evaluations.length > 0">{{ $t(type + ".title") }}</h2>
    <ul>
      <li v-bind:key="evaluation.key" v-for="evaluation in evaluations">
        <evaluation 
          v-bind:type="type" 
          v-bind:option="option" 
          v-bind:evaluation="evaluation"></evaluation>
      </li>
    </ul>
  </div>
</template>

<script>
    module.exports = {
      props: ['type', 'option', 'evaluations'],      
      data: function(){
        return {
          cssclass: this.type + " evaluationslist"
        }
      },
      components: {
        'evaluation': 'url:./evaluation.vue',
      }
    }
</script>