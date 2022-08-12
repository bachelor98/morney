<template>
        <Layout>
            <Tabs class-prefix="type" :dataSource="typeList" :value.sync="type"/>
            <Tabs class-prefix="interval" :dataSource="intervalList" :value.sync="interval"/>
            <div>type:{{type}}<br>interval:{{interval}}</div>
        </Layout>
</template>

<script lang="ts">
import Types from '@/components/Money/Types.vue'
import Tabs from '@/components/Tabs.vue'
import Vue from 'vue'
import {Component} from 'vue-property-decorator'

@Component({
    components:{Tabs,Types},
})

export default class Statistics extends Vue{
    type='-'
    interval = 'day'
    intervalList = [{text:'按天',value:'day'},{text:'按周',value:'week'},{text:'按月',value:'month'}]
    typeList = [{text:'支出',value:'-'},{text:'收入',value:'+'}]
}
</script>

<style lang="scss" scoped>
     /* vue的deep语法，scoped只影响当前组件，但是Types不在当前组件无法影响 */
     /* 因为scss不认识/deep/所以只能用::v-deep */
    ::v-deep .type-tabs-item{
        background: white;
        &.selected{
            background: #c4c4c4;
            &::after{
                display: none;
            }
        }
    }
</style>