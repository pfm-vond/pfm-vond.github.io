<template>
  <div>
    <title>{{$t('homepage.title')}}</title>
    <div class="row">
      <div class="col col-lg"><p>{{$t('homepage.firstParagraph')}}</p></div>
    </div>
    <div class="row">
      <div class="col col-sm-2"><img src=""/></div>
      <div class="col col-lg-10"><p>{{$t('homepage.daffodilsParagraph')}}</p></div>
    </div>
    <div class="row">
      <div class="col col-lg-10"><p>{{$t('homepage.riverParagraph')}}</p></div>
      <div class="col col-sm-2"><img src=""/></div>
    </div>
    <div class="row">
      <div class="col col-lg"><p>{{$t('homepage.lastParagraph')}}</p></div>
    </div>
  </div>
</template>

<script>
    module.exports = {
      data: function () {
        return {
        }
      }
    }
</script>