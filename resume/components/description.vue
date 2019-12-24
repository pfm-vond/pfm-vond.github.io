<template>
    <span>{{ $t(value + "description") }}</span>
</template>

<script>
    module.exports = {
      props: ['value'],
    }
</script>