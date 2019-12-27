<template>
    <div>
        <span v-if="period.to == undefined">
            {{ $t("common.since", { date: $d(from, 'short') }) }}
        </span>
        <span v-else-if="$d(from, 'short') !== $d(to, 'short')">
            {{ $t("common.period", {
                from: $d(from, 'short'),
                to: $d(to, 'short'),
            }) }}
        </span>
        <span v-else>
            {{ $d(from, 'short') }}
        </span>
    </div>
</template>

<script>
    module.exports = {
      props: ['period'],
      data: function(){
        return {
          from: new Date(this.period.from),
          to: new Date(this.period.to)
        }
      },
    }
</script>