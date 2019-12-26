<template>
  <div>
    <div >
      {{ value.surname }} {{ value.name }}
    </div>    
    <div >{{ $t(value.title) }}</div>
    <div >{{ $t("identity.age", { age: age}) }}, {{ $t(licence) }}</div>
    <contact v-bind:value="value.contact"  v-bind:option="option"></contact>
    <div v-bind:key="link.value" v-for="link in value.links">
        <a :href="link.value">{{ $t(link.libelle) }}</a>
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
        'contact': 'url:./contact.vue'
      }
    }
</script>