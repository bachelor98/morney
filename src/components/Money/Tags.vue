<template>
    <div class="tags">
        <div class="new">
            <button @click="createTag">新增标签</button>
        </div>
        <ul class="current">
            <li v-for="tag in tagList" :key="tag.id"
            :class="{selected:selectedTags.indexOf(tag)>=0}"
            @click="toggle(tag)">{{tag.name}}</li>
        </ul>
    </div>    
</template>

<script lang="ts">
import TagHelper from "@/mixins/TagHelper"
import Vue from "vue"
import { mixins } from "vue-class-component"
import {Component,Prop} from 'vue-property-decorator'
@Component

//根据vue-component的文档
//使用如下方法来导入mixins的TagHelper的createTag函数，减少重复
export default class Tags extends mixins(TagHelper){    

    selectedTags:string[] = []

    get tagList(){
        return this.$store.state.tagList
    }

    created(){
        this.$store.commit('fetchTags')
    }

    

    toggle(tag:string){
        const index = this.selectedTags.indexOf(tag)
        if(this.selectedTags.length >= 1){
            this.selectedTags.splice(0,this.selectedTags.length)
            this.selectedTags.push(tag)
        }else{
            this.selectedTags.push(tag)
        }
        this.$emit('update:value',this.selectedTags)
    }

}
</script>

<style lang="scss" scoped>
    .tags {
        background: white;
        font-size: 14px;
        padding:16px;
        flex-grow: 1;
        display: flex;
        flex-direction: column-reverse;
        > .current{
            display: flex;            
            overflow-x: auto;
            padding: 10px 0;
            > li{
                $bg:#d9d9d9;
                margin-top: 4px;
                white-space:nowrap;
                $h:24px;
                background: $bg;
                height: $h;
                line-height: $h;    //只有在确保只有一行字的时候才能使line-height等于height
                border-radius: calc($h/2);
                padding: 0 16px;
                margin-right: 12px;
                &.selected{
                    background: darken($bg,50%);
                    color: white;
                }
                
            }
        }
        > .new{
            padding-top: 6px;
            button{
                background: transparent;
                border: none;
                color:#999;
                border-bottom: 1px solid;
                padding: 0 4px;
            }
        }
    }
</style>