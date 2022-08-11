import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export class TagHelper extends Vue {
    createTag(){
        const name = window.prompt('请输入标签名','不要超过十个字符！');
        if(name === null){
            return
        }else if(!name){
            window.alert('标签名不能为空')
        }
        else if(name.length>10){
            window.alert('标签名称过长！')
        }else{
            this.$store.commit('createTag',name)
        }
    }
}

export default TagHelper