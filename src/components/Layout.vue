<template>
    <div class="layout-wrapper">
        <div class="content" :class="classPrefix && `${classPrefix}-content`">
            <slot/><!--插槽，将layout内的内容插到这里-->
        </div>
        <Nav />
    </div>
</template>

<script lang="ts">

export default {
    props:['classPrefix'],
    name:'Layout'
}
</script>

<style lang="scss" scoped>
    .layout-wrapper{
        display: flex;
        flex-direction: column;
        height: 100vh;
        overflow: auto;
    }
    .content{
        flex-grow: 1; //能占多高占多高
    }
</style>