<template>
    <nav>
      <router-link to='/money' class="item" active-class="selected">
      <Icon name="Money"/>
        记账
      </router-link>
      <router-link to='/labels' class="item" active-class="selected">
      <Icon name="Labels"/>
        标签
      </router-link>
      <router-link to='/statistics' class="item" active-class="selected">
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
@import "~@/assets/style/helper.scss";

nav{
  @extend %outerShadow;
  display: flex;
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
  > .item.selected{
    color: $color-highlight;
  }
}
</style>