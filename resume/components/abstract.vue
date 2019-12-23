<template>
  <div>
    <h1>{{ name }}</h1>
    <h2>{{$t("abstract.subtitle")}}</h2>
  </div>
</template>

<script>
    module.exports = {
      data: function () {
        return {
          name: 'pierre VONDERSCHER'
        }
      }
    }
</script>