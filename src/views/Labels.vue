<template>
    <Layout>
        <div class="tags">
            <router-link class="tag" v-for=" tag in tags" :key="tag.id" :to="`/labels/edit/${tag.id}`">
                <span>
                    {{tag.name}}
                </span>
                <Icon name="right" />
            </router-link>
        </div>
        <div class="createTag-wrapper">
            <Button class="createTag" @click="createTag">新建标签</Button>
        </div>
    </Layout>
</template>

<script lang="ts">
import Vue, { computed } from "vue";
import {Component} from 'vue-property-decorator'
import Button from '@/components/Button.vue'
import TagHelper from '@/mixins/TagHelper'
import { mixins } from "vue-class-component";



@Component({
    components:{Button}
})
export default class Labels extends mixins(TagHelper){
    get tags(){
        return this.$store.state.tagList
    }
    beforeCreate(){
        this.$store.commit('fetchTags')
    }

}
</script>

<style lang="scss" scoped>
    .tags{
        background: white;
        font-size: 16px;
        padding:0 16px;
        >.tag{
            min-height: 50px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #e6e6e6;
            svg{
                color: #666;
                width: 24px;
                height: 24px;
            }
        }
    }
    .createTag{
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