<template>
  <div>
    <h3 v-if="evaluation.values != undefined && evaluation.values.length > 0">
      {{ $t(type + "." + evaluation.key) }}
    </h3>
    <div class="row">
      <div class="col-12" v-bind:key="value.key"  v-for="value in evaluation.values">
        <span>{{ $t(type + "." +value.key) }}</span>
        <span v-if="!(value.gradeOutofFive) 
          || option.grade === 'hidden'"></span>
        <span v-else-if="option.grade" :class="gradeclass" >
          {{ $n(value.gradeOutofFive) }}
        </span>
        <span v-else>{{ $n(value.gradeOutofFive) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
    module.exports = {
      props: ['type', 'option', 'evaluation'],
      data: function () { return { gradeclass: "grade" + this.option.grade } }
    }
</script>