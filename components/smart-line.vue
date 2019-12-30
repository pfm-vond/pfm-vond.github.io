<template>
  <div v-if="value !== undefined">
    <a v-if="islink" :href="value.href">{{ displayText(text) }}</a>
    <span v-else>{{ displayText(text) }}</span>
  </div>
</template>

<script>
    module.exports = {
      props: ['value', 'option'],
      methods: {
        displayText(key){
          if(this.value.translate === false)
          {
            return key;
          }
          
          return this.$i18n.t(key);
        }
      },
      data: function(){
        var _islink = this.value.href !== undefined;
        return {
          islink: _islink,
          text: _islink ? this.value.text : this.value,
        }
      }
    }
</script>