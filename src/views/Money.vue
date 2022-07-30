<template>
    <div class="nav-wrapper">
        <div class="content">
            Money
        </div>
        <Nav />
    </div>
</template>

<script lang="ts">

export default {
    name:'Money',

}
</script>

<style lang="scss" scoped>
    .nav-wrapper{
        border: 1px solid red;
        display: flex;
        flex-direction: column;
        height: 100vh;
        overflow: auto;
    }
    .content{
        flex-grow: 1; //能占多高占多高
    }
</style>