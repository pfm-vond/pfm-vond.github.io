<template>
  <div>
    <div class="row">
      <div class="col-sm-4">
        <menu>
          <ul>
            <li>{{$t('menu.homepage')}}</li>
            <li>{{$t('menu.introduction')}}</li>
            <li>{{$t('menu.map')}}</li>
            <li>{{$t('menu.access')}}</li>
            <li>{{$t('menu.prices')}}</li>
            <li>{{$t('menu.reservation')}}</li>
            <li>{{$t('menu.links')}}</li>
            <li><a href="mailto:vonderscher.isabelle@orange.fr?subject=Demande%20d%27information%20Gite%20du%20Presbytere%20de%20Jussarupt">{{$t('menu.contact')}}</a></li>
            <li>{{$t('menu.legal')}}</li>
          </ul>
        </menu>
      </div>
      <div class="col-sm-8">
        <content>
          <div v-if="current === 'homepage'"><homepage></homepage></div>
          <div v-if="current === 'introduction'"><introduction/></div>
          <div v-if="current === 'map'"><lodgeMap/></div>
          <div v-if="current === 'access'"><access/></div>
          <div v-if="current === 'prices'"><prices/></div>
          <div v-if="current === 'reservation'"><reservation/></div>
          <div v-if="current === 'links'"><links/></div>
          <div v-if="current === 'legal'"><legal/></div>
        </content>
      </div>
    </div>
    
  </div>
</template>

<script>
    module.exports = {
      data: function() { 
        return {
          current: 'homepage',
        }
      },
      components: {
        'homepage': 'url:./pages/homepage.vue',
        'introduction': 'url:./pages/introduction.vue',
        'lodgeMap': 'url:./pages/lodgeMap.vue',
        'access': 'url:./pages/access.vue',
        'prices': 'url:./pages/prices.vue',
        'reservation': 'url:./pages/reservation.vue',
        'links': 'url:./pages/links.vue',
        'legal': 'url:./pages/legal.vue',
      }
    };
</script>