<template>
    <span>{{ $t('common.orgaloc', { 
      organisation: $t(value.name), 
      location: $t(value.location)
     }) }}</span>
</template>

<script>
    module.exports = {
      props: ['value'],
    }
</script>