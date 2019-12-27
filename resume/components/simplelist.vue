<template>
  <div :class="cssclass">
    <ul>
      <li :key="item.key"  v-for="item in items">
        <smartext :class="item.key" :option="option" :value="item.value"></smartext>
      </li>
    </ul>
  </div>
</template>

<script>
    module.exports = {
      props: ['type', 'option', 'items'],
      data: function(){
        return {
          cssclass: this.type + " simplelist"
        }
      },
      components: {
        'smartext': 'url:./smart-paragraph.vue',
      }
    }
</script>