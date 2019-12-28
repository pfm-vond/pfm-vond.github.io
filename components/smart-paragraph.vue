<template>
  <div>
    <div v-if="isMultiline">
      <p class="line" v-for="(line, index) in paragraph" :key="index">
        <smartline :option="option" :value="line">
      </p>
    </div>
    <div v-else-if="isTranslationMultiline">
      <p class="line" v-for="(line, index) in translations" :key="index">
        <smartline :option="option" :value="value + '[' + index + ']'">
      </p>
    </div>
    <smartline v-else :option="option" :value="text"></smartline>
  </div>
</template>

<script>
    module.exports = {
      props: ['value', 'option'],
      data: function(){
        return {
          isMultiline: Array.isArray(this.value),
          isTranslationMultiline: Array.isArray(this.$i18n.t(this.value)),
          text: this.value,
          paragraph: this.value,
          translations: this.$i18n.t(this.value)
        }
      },
      components: {
        'smartline': 'url:./smart-line.vue',
      }
    }
</script>