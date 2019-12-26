<template>
  <div :class="cssclass">
    <ul>
      <li v-bind:key="item.key"  v-for="item in items">
        {{ $t(type + "." + item.key) }}
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
      }
    }
</script>