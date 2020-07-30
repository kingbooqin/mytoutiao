<!--  -->
<template>
<div class='nav-content'>
    <section class="nav-header">今日头条</section>
    <section class="nav-item" v-for="item,index in navData":key="item.id">{{item.name}}</section>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
    navData:[
        {
            id: 1,
            name: "推荐"
        }, {
            id: 2,
            name: "西瓜视频"
        }, {
            id: 3,
            name: "财经"
        }, {
            id: 4,
            name: "热点"
        }, {
            id: 5,
            name: "直播"
        }, {
            id: 6,
            name: "图片"
        }, {
            id: 7,
            name: "科技"
        }, {
            id: 8,
            name: "娱乐"
        }, {
            id: 9,
            name: "游戏"
        }, {
            id: 10,
            name: "体育"
        }, {
            id: 11,
            name: "懂车帝"
        }, {
            id: 12,
            name: "原创"
        }, ]
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang="less"  scoped>
.nav-content {
    text-align: center;
  .nav-header {
      font-size: 22px;
      color: #ED4040;
      font-weight: bolder;
  }
  .nav-item {
      transition: all .2s;
      &:hover{
          background: crimson;
          border-radius: 6px;
          color: #fff;
      }
      height: 40px;
      line-height: 40px;
      
  }
}
</style>