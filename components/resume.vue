<template>
  <div class="container-fluid">
    <div class="row">
      <identity
       v-if="pi.IsTopLeft" 
       :class="pi.TopLeft" 
       v-bind:option="option" 
       v-bind:value="resume.identity">
      </identity>

      <career 
       :class="careerwidth"
       v-bind:option="option"
       v-bind:value="resume">
      </career>

      <identity 
       v-if="pi.IsBottomRight" 
       :class="pi.BottomRight" 
       v-bind:option="option" 
       v-bind:value="resume.identity">
      </identity>
    </div>
  </div>
</template>

<script>
    module.exports = {
      props: ['resume', 'option'],    
      data: function() {
        var columnSize = 3;
        var fullSize = 12;
        var mainSize = fullSize - columnSize;

        var columnClass = "col-" + columnSize;
        var mainClass = "col-" + mainSize;
        var fullClass = "col-" + fullSize;

        var isAColumn = (this.option.abstract === 'left'
              || this.option.abstract === 'right');
        var isTopLeft = (this.option.abstract === 'left'
              || this.option.abstract === 'top');
        var isBottomRight = (this.option.abstract === 'bottom'
              || this.option.abstract === 'right');

        return {
          careerwidth: isAColumn ? mainClass : fullClass,
          pi: {
            IsTopLeft: isTopLeft,
            IsBottomRight: isBottomRight,
            TopLeft: isAColumn ? columnClass : fullClass,
            BottomRight: isAColumn ? columnClass : fullClass
          }
        }
      },
      components: {
        'career': 'url:./career.vue',
        'identity': 'url:./identity.vue',
      }
    }
</script>