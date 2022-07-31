<template>
    <nav>
      <router-link to='/money' class="item">
      <Icon name="Money"/>
        记账
      </router-link>
      <router-link to='/labels' class="item">
      <Icon name="Labels"/>
        标签
      </router-link>
      <router-link to='/statistics' class="item">
      <Icon name="Statistics"/>
        统计
      </router-link>
    </nav>
</template>

<script lang="ts">
import Icon from './Icon.vue'

export default {
  components: { Icon },
    name:'Nav'
}
</script>

<style lang="scss" scoped> //scoped的作用是自动在div上加随机字符串，这样就不怕重名
nav{
  display: flex;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  flex-direction: row;
  font-size: 12px;
  > .item {   //scss的语法，等于nav内的.item
    padding: 2px 0;
    width: 33.333333%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .icon{
      width: 32px;
      height: 32px;
    }
  }
}
</style>