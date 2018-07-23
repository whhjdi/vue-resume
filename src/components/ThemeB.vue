<template>
  <div v-show="themeName==='themeB'" class="theme">
    <aside>1</aside>
    <main>2</main>
  </div>
</template>

<script>
console.log(this.themeName)
export default {
  props:['themeName'],
  data() {
    return {

    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
  .theme{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
  >aside {
    background-color: #eeeeee;
    color: #333;
    text-align: center;
    width: 200px;
  }
  
  >main {
    flex: 1;
    background: #515256;
    color: #333;
    text-align: center;
    line-height: 100%;
    max-width: 800px;;
  }
 }
</style>
