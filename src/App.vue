<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'

export default class App extends Vue {}
</script>

<style lang="scss">
  @import "./style/init.scss";
  #app {
    width: 100%;
    height: 100%;
  }
</style>
