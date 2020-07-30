<!--  -->
<template>
<div class=''>
  <!-- 顶部头条区域 -->
  <div class="tt-home-header">
    <h1>头条</h1>
  </div>
  <!-- 中间内容区域 -->
  <div class="tt-home-center">
    <div class="home-center-left">
      <!-- 加入导航插件 -->
      <Navgation></Navgation>
    </div>
    <div class="home-center-middle">
      中间
      <SendMessage></SendMessage>
      <!-- 加入文章发表插件 -->
    </div>
    <div class="home-center-right">
      右边
    </div>
  </div>


</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Navgation from "../components/Navgation";
import SendMessage from "../components/SendMessage"
export default {
//import引入的组件需要注入到对象中才能使用
components: {
  Navgation,
  SendMessage
},
data() {
//这里存放数据
return {

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
<style lang="less" scoped>
//顶部头条
.tt-home-header {
  height: 40px;
  background: #000;
  line-height: 40px;
  padding-left: 6px;
  h1 {
    font-size: 22px;
    color: #fff;
  }
}
//中间内容板块
.tt-home-center {
  display: flex;
  width: 80vw;
  padding-top: 10px;
  margin: 0 auto;
  //左边导航区域
  .home-center-left {
    flex: 1;
  }
  //中间发表文章区域
  .home-center-middle {
    flex: 3;
  }

  .home-center-right {
    flex: 1;
  }
}
</style>