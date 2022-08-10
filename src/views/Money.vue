<template>
        <Layout class-prefix="layout">
            <number-pad :value="record.amount" @update:value="onUpdateAmount"
            @submit="saveRecord" />
            <types :value.sync="record.type" />
            <div class="notes">
                <form-item field-name="备注" 
                @update:value="onUpdateNotes" placeholder="在这里输入备注"/>
            </div>
            <tags :data-source.sync="tags" @update:value="onUpdateTags" />
        </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import NumberPad from '@/components/Money/NumberPad.vue'
import Types from '@/components/Money/Types.vue'
import FormItem from '@/components/Money/FormItem.vue'
import Tags from '@/components/Money/Tags.vue'
import {Component, Watch} from 'vue-property-decorator'
import recordListModel from '@/models/recordListModel'
import tagListModel from '@/models/tagListModel'

const recordList = recordListModel.fetch()


@Component({
    components: { NumberPad, Types, FormItem, Tags }
})
export default class Money extends Vue{
    tags = window.tagList
    recordList:RecordItem[] = recordList
    record:RecordItem = {tags:[],notes:'',type:'-',amount:0
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
        recordListModel.create(this.record)
    }
    @Watch('recordList')
    onRecordListChange(){
        recordListModel.save()
    }
}
</script>

<style lang="scss">
.layout-content{
    display: flex;
    flex-direction:column-reverse; 
}
.notes{
    padding: 12px 0;
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