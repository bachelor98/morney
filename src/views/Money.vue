<template>
        <Layout class-prefix="layout">
            <number-pad :value="record.amount" @update:value="onUpdateAmount"
            @submit="saveRecord" />
            <Tabs :data-source="recordTypeList"
            :value.sync="record.type" />
            <div class="notes">
                <form-item field-name="备注" :value="record.notes"
                @update:value="onUpdateNotes" placeholder="在这里输入备注"/>
            </div>
            <div class="createdAt">
                <form-item field-name="日期" :value.sync="record.createdAt"
                type="date"
                placeholder="在这里输入日期"/>
            </div>
            <tags @update:value="record.tags = $event"/>
        </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import NumberPad from '@/components/Money/NumberPad.vue'
import FormItem from '@/components/Money/FormItem.vue'
import Tags from '@/components/Money/Tags.vue'
import {Component} from 'vue-property-decorator'
import recordTypeList from '@/constants/recordTypeList'
import Tabs from '@/components/Tabs.vue'

@Component({
    components: { NumberPad, FormItem, Tags ,Tabs},
})
export default class Money extends Vue{
    get recordList(){
        return this.$store.state.recordList
    }

    recordTypeList = recordTypeList

    record:RecordItem = {tags:[],notes:'',type:'-',amount:0,createdAt:new Date().toISOString()
    }
    created(){
        this.$store.commit('fetchRecords')
    }

    onUpdateNotes(value:string){
        this.record.notes = value
    }
    onUpdateAmount(value:string){
        this.record.amount = parseFloat(value)
    }
    saveRecord(){
        if(this.record.tags.length === 0){
            const a = window.confirm('你没有选择标签，确定要继续吗？')
            if(a){
                this.$store.commit('createRecord',this.record)
                this.record.notes = ''
                window.alert('保存成功！')
            }else{
                return
            }
        }else{
            this.$store.commit('createRecord',this.record)
            this.record.notes = ''
            window.alert('保存成功！')
        }
    }

}


if(window.innerWidth>450){
    window.alert('此项目针对手机开发，推荐使用手机打开')
}

</script>

<style lang="scss" scoped>
::v-deep .layout-content{
    display: flex;
    flex-direction:column-reverse; 
}
.notes{
    padding: 12px 0;
}
</style>
