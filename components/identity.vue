<template>
  <div class="identity">
    <div class="name">
      {{ value.surname }} {{ value.name }}
    </div>    
    <div class="title">{{ $t(value.title) }}</div>
    <div class="subtitle">{{ $t("identity.age", { age: age}) }}, {{ $t(licence) }}</div>
    <contact v-bind:value="value.contact"  v-bind:option="option"></contact>
    <div class="links" v-bind:key="link.value" v-for="link in value.links">
        <smartext class="link" :option="option" :value="link"></smartext>
    </div>
  </div>
</template>

<script>
    module.exports = {
      props: ['value', 'option'],  
      data: function () { 
        var ageDifMs = Date.now() - new Date(this.value.birthdate);
        var ageDate = new Date(ageDifMs);

        return {
          age: Math.abs(ageDate.getUTCFullYear() - 1970),
          licence: this.value.IsLicenceOwned 
            ? "common.licence.owned"
            : "common.licence.missing"
        } 
      },
      components: {
        'smartext': 'url:./smart-paragraph.vue',
        'contact': 'url:./contact.vue'
      }
    }
</script>