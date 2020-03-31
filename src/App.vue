<template>
  <div id="app">
    <transition name="fade">
      <router-view class="child-view" />
    </transition>
  </div>
</template>

<style lang="scss">
@import "~assets/styles/common.scss";
</style>
