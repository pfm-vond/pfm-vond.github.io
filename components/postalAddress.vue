<template>
  <div class="postal">
    <div>
        <div>{{ $t('common.address[0]', addressData($t(value.honorific))) }}</div>
        <div>{{ $t('common.address[1]', addressData($t(value.honorific))) }}</div>
        <div>{{ $t('common.address[2]', addressData($t(value.honorific))) }}</div>
        <div>{{ $t('common.address[3]', addressData($t(value.honorific))) }}</div>
        <div>{{ $t('common.address[4]', addressData($t(value.honorific))) }}</div>
        <div>{{ $t('common.address[5]', addressData($t(value.honorific))) }}</div>
        <div>{{ $t('common.address[6]', addressData($t(value.honorific))) }}</div>
    </div>
  </div>
</template>

<script>
    module.exports = {
      props: ['value', 'option'],
      methods: {
          addressData(honorific)
          {
              return {
                honorific:honorific,
                name: this.value.name.join(' '),
                companyName: this.value["company-name"].join(' '),
                street: this.value.street.join(' '),
                cityarea: this.value.cityarea.join(' '),
                city: this.value.city.join(' '),
                county: this.value.county.join(' '),
                postalCode: this.value.postalCode.join(' '),
                country: this.value.country.join(' ')
            }
          }
      }
    }
</script>