<template>
  <a :href="mailto">{{email}}</a>
</template>

<script>
    module.exports = {
      props: ['email', 'option'],  
      data: function () { 
        return {
          mailto: "mailto:" + this.email
        } 
      }
    }
</script>