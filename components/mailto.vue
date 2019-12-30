<template>
  <smartext class="contact-mail" :value="value" :option="option"></smartext>
</template>

<script>
    module.exports = {
      props: ['email', 'option'],  
      data: function () { 
        return {
          value: {
            href: "mailto:" + this.email,
            text: this.email,
            translate: false
          } 
        } 
      },
      components: {
        'smartext': 'url:./smart-paragraph.vue',
      }
    }
</script>