<template>
  <div>
    <h2 v-if="cards != undefined && cards.length > 0">{{ $t(type + ".title") }}</h2>
    <ul>
      <li v-bind:key="study.key"  v-for="study in cards">
        <card 
          v-bind:type="type" 
          v-bind:option="option" 
          v-bind:card="study"></card>
      </li>
    </ul>
  </div>
</template>

<script>
    module.exports = {
      props: ['type', 'option', 'cards'],
      components: {
        'card': 'url:./card.vue',
      }
    }
</script>