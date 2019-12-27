<template>
  <div v-if="value && option.grade !== 'hidden'">
    <span v-if="option.grade" :class="gradeclass" >
      {{ $n(value.gradeOutofFive) }}
    </span>
    <span v-else>{{ $n(value.gradeOutofFive) }}</span>
  </div>
</template>

<script>
    module.exports = {
      props: ['value', 'option'],
      data: function () { return { gradeclass: "grade " + this.option.grade } },
    }
</script>