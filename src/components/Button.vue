<template>
    <button class="button" @click="$emit('click',$emit)"><slot/></button>
</template>

<script lang="ts">
import Vue from 'vue'
export default class Button extends Vue{
    
}
</script>

<style lang="scss" scoped>
    .button{
        background: #767676;
        color: white;
        border-radius: 4px;
        border: none;
        height: 40px;
        padding: 0 16px;
        /* 下面的&-是指他的父元素 */
        &-wrapper{
            text-align: center;
            padding: 16px;
            margin-top: 28px;
        }
    }
</style>