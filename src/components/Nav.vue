<template>
    <div class="nav">
      <router-link to='/money'>记账</router-link> |
      <router-link to='/labels'>标签</router-link> |
      <router-link to='/statistics'>统计</router-link> |
    </div>
</template>

<script lang="ts">
import x from '/@assert/icons/Labels.svg'
export default {
    name:'Nav'
}
</script>

<style lang="scss" scoped> //scoped的作用是自动在div上加随机字符串，这样就不怕重名
  .nav{

  }
</style>