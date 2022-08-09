<template>
    <div class="tags">
        <div class="new">
            <button @click="create">新增标签</button>
        </div>
        <ul class="current">
            <li v-for="tag in dataSource" :key="tag.id"
            :class="{selected:selectedTags.indexOf(tag)>=0}"
            @click="toggle(tag)">{{tag.name}}</li>
        </ul>
    </div>    
</template>

<script lang="ts">
import Vue from "vue"
import {Component,Prop} from 'vue-property-decorator'
@Component
export default class Tags extends Vue{
    @Prop() readonly dataSource:string[] | undefined
    selectedTags:string[] = []

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

    create(){
        const name = window.prompt('请输入标签名','不要超过十个字符！');
        if(name === ''){
            window.alert('标签不能为空')
        }else if(name!.length>10){
            window.alert('标签名称过长！')
        }else if(this.dataSource){
            this.$emit('update:dataSource',[...this.dataSource,name])
        }
    }
}
</script>

<style lang="scss" scoped>
    .tags {
        background: white;
        font-size: 14px;
        padding: 16px;
        flex-grow: 1;
        display: flex;
        flex-direction: column-reverse;
        > .current{
            display: flex;
            flex-wrap: no-wrap;
            flex-wrap: wrap;
            /**************** overflow-x: auto; ********************/
            > li{
                $bg:#d9d9d9;
                margin-top: 4px;
                $h:24px;
                background: $bg;
                height: $h;
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
            padding-top: 16px;
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