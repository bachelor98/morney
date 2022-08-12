<template>
        <Layout>
            <Tabs class-prefix="type" :dataSource="recordTypeList" :value.sync="type"/>
            <Tabs class-prefix="interval" :dataSource="intervalList" :value.sync="interval"/>
            <div>type:{{type}}<br>interval:{{interval}}</div>
        </Layout>
</template>

<script lang="ts">
import Tabs from '@/components/Tabs.vue'
import Vue from 'vue'
import {Component} from 'vue-property-decorator'
import intervalList from '@/constants/intervalList'
import recordTypeList from '@/constants/recordTypeList'

@Component({
    components:{Tabs},
})

export default class Statistics extends Vue{
    type='-'
    interval = 'day'
    intervalList = intervalList
    recordTypeList = recordTypeList
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