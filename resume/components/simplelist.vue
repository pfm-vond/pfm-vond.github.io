<template>
  <div :class="cssclass"
    v-if="items != undefined 
    && items.length > 0">
    <ul>
      <li :key="item.key"  v-for="item in items">
        <slot v-bind:item="item">
          <smartext 
            :class="item.key" 
            :option="option"
            :value="item.value"></smartext>
        </slot>
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