<template>
  <div>
    <span v-if="isMultiline">
      <p class="line" v-for="(line, index) in paragraph" :key="index">{{ $t(line) }}</p>
    </span>
    <span v-else>{{ $t(text) }}</span>
  </div>
</template>

<script>
    module.exports = {
      props: ['value', 'option'],
      data: function(){
        return {
          isMultiline: Array.isArray(this.value),
          text: this.value,
          paragraph: this.value
        }
      }
    }
</script>