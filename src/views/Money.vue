<template>
        <Layout class-prefix="layout">
            <number-pad :value="record.amount" @update:value="onUpdateAmount"
            @submit="saveRecord" />
            <types :value.sync="record.type" />
            <notes @update:value="onUpdateNotes" />
            <tags :data-source.sync="tags" @update:value="onUpdateTags" />
        </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import NumberPad from '@/components/Money/NumberPad.vue'
import Types from '@/components/Money/Types.vue'
import Notes from '@/components/Money/Notes.vue'
import Tags from '@/components/Money/Tags.vue'
import {Component, Watch} from 'vue-property-decorator'

type Record={
    tags:string[],
    notes:string,
    type:string,
    amount:number,
    createAt?:Date  //Date是类，或者说是构造函数。?:是指还可能是undefined类型
}

@Component({
    components: { NumberPad, Types, Notes, Tags }
})
export default class Money extends Vue{
    tags = ['衣','食','住','行']
    recordList:Record[] = JSON.parse(window.localStorage.getItem('recordList')||'[]')
    record:Record = {tags:[],notes:'',type:'-',amount:0
    }

    onUpdateTags(value:string[]){
        this.record.tags = value
    }
    onUpdateNotes(value:string){
        this.record.notes = value
    }
    onUpdateAmount(value:string){
        this.record.amount = parseFloat(value)
    }
    saveRecord(){
        const record2:Record = JSON.parse(JSON.stringify(this.record))
        record2.createAt = new Date()
        this.recordList.push(record2)
        console.log(this.recordList)
    }
    @Watch('recordList')
    onRecordListChange(){
        window.localStorage.setItem('recordList',JSON.stringify(this.recordList))
    }
}
</script>

<style lang="scss">
.layout-content{
    display: flex;
    flex-direction:column-reverse; 
}
</style>
<style lang="scss" scoped>

/************************ 以下代码更改滚动条，日后更改润化 **********************/
/************************ 在下面还有flex-wrap **********************/
    // ::-webkit-scrollbar{
    //             width: 6px;
    //             background: #f5f5f5;
    //             height: 6px;
    //         }
    // ::-webkit-scrollbar-track{
    //             -webkit-box-shadow:inset 0 0 6px fbga(0,0,0,3);
    //             border-radius: 3px;
    //         }
    // ::-webkit-scrollbar-thumb{
    //     border-radius: 3px;
    //     height: 100px;
    //     background-color: #ccc;
    // }

</style>