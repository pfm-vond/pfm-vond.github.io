<template>
  <div v-if="value !== undefined">
    <a v-if="islink" :href="value.href">{{ $t(text) }}</a>
    <span v-else>{{ $t(text) }}</span>
  </div>
</template>

<script>
    module.exports = {
      props: ['value', 'option'],
      data: function(){
        var _islink = this.value.href !== undefined;
        return {
          islink: _islink,
          text: _islink ? this.value.text : this.value,
        }
      }
    }
</script>