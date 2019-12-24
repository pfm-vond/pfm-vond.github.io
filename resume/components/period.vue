<template>
    <div>
        <span v-if="period.to == undefined">
            {{ $t("since", { date: $d(period.from, 'short') }) }}
        </span>
        <span v-else-if="period.from - period.to != 0">
            {{ $t("period", {
                from: $d(period.from, 'short'),
                to: $d(period.to, 'short'),
            }) }}
        </span>
        <span v-else>
            {{ $d(period.from, 'short') }}
        </span>
    </div>
</template>

<script>
    module.exports = {
      props: ['period'],
    }
</script>