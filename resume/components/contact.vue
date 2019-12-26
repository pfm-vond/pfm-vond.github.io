<template>
  <address>
    <div v-bind:key="email" v-for="email in value.emails">
        <mailto v-bind:email="email"  v-bind:option="option"></mailto>
    </div>
    <postal 
      displayName="false" 
      v-bind:value="value.address"
      v-bind:option="option">
    </postal>
  </address>
</template>

<script>
    module.exports = {
      props: ['value', 'option'],  
      data: function () { 
        return {
        } 
      },
      components: {
        'mailto': 'url:./mailto.vue',
        'postal': 'url:./postalAddress.vue',
      }
    }
</script>