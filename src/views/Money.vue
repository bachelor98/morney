<template>
        <Layout class-prefix="layout">
            <div class="numberPad">
                <div class="output">100</div>
                <div class="buttons">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>删除</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>清空</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button class="ok">OK</button>
                    <button class="zero">0</button>
                    <button>.</button>
                </div>
            </div>
            <div>
                <ul class="types">
                    <li class="selected">支出</li>
                    <li>收入</li>
                </ul>
            </div>
            <div>
                <label class="notes">
                    <span class="name">备注</span>
                    <input type="text" placeholder="在这里输入备注">
                </label>
            </div>
            <div class="tags">
                <div class="new">
                    <button>新增标签</button>
                </div>
                <ul class="current">
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                                        <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                                        <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                                        <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                </ul>
            </div>



        </Layout>
</template>

<script lang="ts">
export default {
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
@import "~@/assets/style/helper.scss";
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
    .tags {
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
                margin-top: 4px;
                $h:24px;
                background: #d9d9d9;
                height: $h;
                height: $h;
                line-height: $h;    //只有在确保只有一行字的时候才能使line-height等于height
                border-radius: calc($h/2);
                padding: 0 16px;
                margin-right: 12px;
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
    .notes{
        font-size: 14px;
        display: block;
        background: #f5f5f5;
        padding: 0 16px;
        display: flex;
        align-items: center;
        .name{
            padding-right: 16px;
        }
        input{
            height: 64px;
            flex-grow: 1;
            background: transparent;
            border: none;
        }
    }
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
    .numberPad{
        .output{
            @extend %clearFix;
            @extend %innerShadow;
            font-size: 36px;
            font-family: Consolas,monospace;    //实现等宽的编程字体
            padding: 9px 16px;
            text-align: right;
        }
        .buttons{
            @extend %clearFix;
            flex-wrap: wrap;
            > button{
                height: 64px;
                width: 25%;
                background: transparent;
                border: none;
                float: left;
                &.ok{
                    height: 64*2px;
                    float: right;
                }
                &.zero{
                    width: 25*2%;
                }
                $bg:#f2f2f2;
                &:nth-child(1){
                    background:$bg;
                }
                &:nth-child(2),&:nth-child(5){
                    background: darken($bg,4%); //比$bg再深4%的颜色
                }
                &:nth-child(3),&:nth-child(6),&:nth-child(9){
                    background: darken($bg,8%); 
                }
                &:nth-child(4),&:nth-child(7),&:nth-child(10){
                    background: darken($bg,12%); 
                }
                &:nth-child(8),&:nth-child(11),&:nth-child(13){
                    background: darken($bg,16%);
                }
                &:nth-child(14){
                    background: darken($bg,20%); 
                }
                &:nth-child(12){
                    background: darken($bg,24%);
                }
            }
        }
    }
</style>