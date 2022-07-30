<template>
    <div class="nav">
      <router-link to='/money'>
      <Icon name="Money"/>
        记账
      </router-link>
      <router-link to='/labels'>
      <Icon name="Labels"/>
        标签
      </router-link>
      <router-link to='/statistics'>
      <Icon name="Statistics"/>
        统计
      </router-link>
    </div>
</template>

<script lang="ts">
import Icon from './Icon.vue'

export default {
  components: { Icon },
    name:'Nav'
}
</script>

<style lang="scss" scoped> //scoped的作用是自动在div上加随机字符串，这样就不怕重名
  .nav{

  }
</style>