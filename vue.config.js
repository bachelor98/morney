const path = require('path')  //引入path模块

module.exports = {
  lintOnSave: false,
  chainWebpack : config => {   //添加chaiWebpack函数
    const dir = path.resolve(__dirname,'src/assets/icons')   //__dirname就是当前目录
    
    config.module   //config是vue把webpack封装后暴露给我们的对象
      .rule('svg-sprite')   //添加规则
      .test(/\.svg$/)    //正则
      .include.add(dir).end()   //指定icons目录使用该规则
      .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract:false}).end() 
    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'),[{plainSprite:true}])
    config.module.rule('svg').exclude.add(dir)    //其他svg loader排除icons目录
  }
}
