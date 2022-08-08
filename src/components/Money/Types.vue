<template>
    <div>
        <ul class="types">
            <li :class="value === '-' && 'selected'"
            @click="selectType('-')">支出</li>
            <li :class="value === '+' && 'selected'"
            @click="selectType('+')">收入</li>
        </ul>
    </div>
</template>

<script lang="ts">
// 使用ts代码如下
    import Vue from 'vue'
    import {Component, Prop} from 'vue-property-decorator'
    @Component
    export default class Types extends Vue {

        @Prop() readonly value!: string   
        //Number是运行时报错，即浏览器报错
        // number | undefined 是编译时报错
        //即TS报错，而js根本没有运行就被ts拦截，浏览器不报错

        selectType(type:string){
            if(type !=='-' && type !== '+'){
                throw new Error('type is unknown')
            }
            this.$emit('update:value',type)
        }

    }
</script>

<style lang="scss" scoped>
    .types{
        background: #c4c4c4;
        display: flex;
        text-align: center;
        font-size: 24px;
        > li{
            width: 50%;
            display: flex;
            height: 64px;
            justify-content: center;
            align-items: center;
            position: relative;
            &.selected::after{
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 4px;
                background: #333;
            }
        }
    }
</style>