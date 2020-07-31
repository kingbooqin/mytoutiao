<!--  -->
<template>
<div class=''>
  <!-- 顶部头条区域 -->
  <div class="tt-home-header">
    <h1>头条</h1>
  </div>
  <!-- 中间内容区域 -->
  <div class="tt-home-center">
    <!-- 左边导航区域 -->
    <div class="home-center-left">
      <Navgation></Navgation>
    </div>
    <!-- 中间发文章区域 -->
    <div class="home-center-middle">
      <!-- 点击刷新以上的区域 -->
      <div class="center-middle-header">
        <!-- 发微头条 写文章 -->
        <section class="middle-header-top">
          <section @click="change(item.type)" v-for="item in articleData" :key="item.id"
            :class='["header-top-item",{active:active===item.type}]'>{{item.name}}</section>
        </section>
        <!-- 1.发微头条 -->
        <div class="sendV" v-if="active==='tt'">
          <!-- 新鲜事 -->
          <section class="middle-header-center">
            <textarea v-model="content" placeholder="有什么新鲜事想告诉大家" name="" id="" cols="30" rows="10"></textarea>
          </section>
          <!-- 图片 发布 -->
          <section class="middle-header-bottom">
            <section class="addImg">图片</section>
            <section @click="sendTT" class="sendArticle">发布</section>
          </section>
        </div>
        <!-- 2.写文章 -->
        <div class="writeArticle" v-if="active==='article'">
          <!-- 输入标题 -->
          <section class="write_input">
            <input type="text" v-model="title" placeholder="请输入内容">
          </section>
          <!-- 富文本编辑器 -->
          <vue-editor id="editor" v-model="html_content"></vue-editor>
          <section class="article-publish">
                <span class="publish-title" @click="publishArticle">发布</span>
          </section>
        </div>
      </div>
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
import { VueEditor } from "vue2-editor";

export default {
//import引入的组件需要注入到对象中才能使用
components: {
  Navgation,
  VueEditor
},
data() {
//这里存放数据
return {
  active:"article",
  articleData:[{
    id:1,name:"发微头条",type:"tt"
  },
  {
    id:2,name:"写文章",type:"article"
  }],
  content:"",//微头条内容
  title:"",//标题
  html_content:"",//富文本内容
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  sendTT(){
    let content = this.content;
    if(!content){
      //如果内容为空,利用element组件提示
      this.$message({
        message:"请输入内容后再发布！",
        type:"warning",
      });
      return false;
    }
    // 如果有内容则发布下去
    this.$axios.post("/createTT",{
      content,
      img:"",
    })
    .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    this.content = "";
  },
  publishArticle(){
    let title = this.title;
    let html_content = this.html_content;
    if(!title || !html_content){
      this.$message({
        message:"输入不能为空",
        type:"waning",
      })
      return false;
    }
    this.$axios.post("/createArticle",{
        content:html_content,
        img:"",
        title:title
      }).then(res=>{
        console.log(res)
      }).catch(err=>console.log(err))
  },
  // 切换 发头条 发文章
  change(type){
    this.active = type;
  }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
 this.$axios
      .get("http://tt.linweiqin.com/api/tt/getArticles", {
        params: {
          lastid: 0,
          type: "TT",
          page: 1,
          number: 20,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
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
    .active {
      color: skyblue;
      border-bottom: 2px solid red;
    }

    flex: 3;

    .center-middle-header {

      //发微头条 写文章
      .middle-header-top {
        display: flex;
        padding-bottom: 6px;

        .header-top-item {
          text-align: center;
          height: 40px;
          width: 100px;
          line-height: 40px;
        }
      }
      // 新鲜事
      .middle-header-center {
        textarea {
          width: 100%;
        }
      }
      //图片 发布
      .middle-header-bottom {
        display: flex;
        height: 30px;
        line-height: 30px;
        justify-content: space-between;
        .addImg {}
        .sendArticle {
          width: 100px;
          background: #ea4245;
          color: #fff;
          text-align: center;
        }
      }
       .writeArticle {
          height: 200px;
          .write_input {
            margin-bottom: 4px;
            input {
              width: 100%;
              border: none;
            }
          }
          .article-publish {
            display: flex;
            justify-content: flex-end;
            .publish-title {
              width: 100px;
              height: 30px;
              line-height: 30px;
              text-align: center;
              background: crimson;
              color: #fff;

            }
          }
        }
    }
  }

  .home-center-right {
    flex: 1;
  }
}
</style>