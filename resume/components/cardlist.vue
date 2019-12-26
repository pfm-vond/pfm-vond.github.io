<template>
  <div :class="cssclass">
    <h2 v-if="cards != undefined && cards.length > 0">{{ $t(type + ".title") }}</h2>
    <ul>
      <li v-bind:key="card.key"  v-for="card in cards">
        <card 
          v-bind:type="type" 
          v-bind:option="option" 
          v-bind:card="card"></card>
      </li>
    </ul>
  </div>
</template>

<script>
    module.exports = {
      props: ['type', 'option', 'cards'],      
      data: function(){
        return {
          cssclass: this.type + " cardlist"
        }
      },
      components: {
        'card': 'url:./card.vue',
      }
    }
</script>