<template>
  <div 
   :class="cssclass" 
    v-if="cards != undefined
    && cards.values != undefined
    && cards.values.length > 0">

    <h2><smartext :option="option" :value="cards.title"></smartext></h2>
    <ul>
      <li :key="card.key"  v-for="card in cards.values">
        <card 
          :type="type" 
          :option="option" 
          :card="card"></card>
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
        'smartext': 'url:./smart-paragraph.vue'
      }
    }
</script>