<template>
        <Layout class-prefix="layout">
            <number-pad />
            <types />
            <notes />
            <tags />
        </Layout>
</template>

<script lang="ts">
import NumberPad from '@/components/Money/NumberPad.vue'
import Types from '@/components/Money/Types.vue'
import Notes from '@/components/Money/Notes.vue'
import Tags from '@/components/Money/Tags.vue'
export default {
  components: { NumberPad, Types, Notes, Tags },
    name:'Money',
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