<template>
  <div>
    <h3>
      {{$t(resource + "title")}}
    </h3>
    <organisation v-bind:value="card.organisation"></organisation>
    <period v-bind:period="card.period"></period>
    <description v-bind:value="resource"></description>
  </div>
</template>

<script>
    module.exports = {
      props: ['type', 'card', 'option'],
      data: function(){
        return {
          resource: this.type + "." + this.card.key + "."
        }
      },
      components: {
        'period': 'url:./period.vue',
        'description': 'url:./description.vue',
        'organisation': 'url:./organisation.vue',
      }
    }
</script>