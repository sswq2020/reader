<template>
  <div class="home-card">
    <div class="home-card-inner">
      <div class="user-info">
        <div class="avatar-wrapper">
          <ImageView src="https://qpic.y.qq.com/music_cover/hKFribMhwH4ClwNWJxicuCxmpic7Ateupz2nto2UYtYZn9VlORc1DP5rg/300?n=1" round="true" >
          </ImageView>
        </div>
        <div class="nickname">米老鼠</div>
        <div class="shelf-text">书架共有3本好书</div>
        <div class="round-item"></div>
        <div class="shelf-text">特别精选</div>
      </div>
      <div class="book-info">
        <div class="book-wrapper">
          <div class="book-img-warpper">
            <ImageView src="https://www.youbaobao.xyz/book/res/img//EarthSciences/978-981-10-3713-9_CoverFigure.jpg">
            </ImageView>
          </div>
          <div class="book-img-warpper">
            <ImageView src="https://www.youbaobao.xyz/book/res/img//EarthSciences/978-981-10-3713-9_CoverFigure.jpg">
            </ImageView>
          </div>
          <div class="book-img-warpper">
            <ImageView src="https://www.youbaobao.xyz/book/res/img//EarthSciences/978-981-10-3713-9_CoverFigure.jpg">
            </ImageView>
          </div>
        </div>
        <div class="shelf-wrapper">
          <div class="shelf">书架</div>
          <van-icon
            class="arrow"
            name="arrow"
            color="#828489"
            size="11px">
          </van-icon>
        </div>
      </div>
      <div class="feedback-wrapper"><span @click="onFeedBackClick">反馈</span></div>
    </div>
    <van-dialog id="van-dialog"></van-dialog>
  </div>
</template>

<script>
import ImageView from './ImageView'
import Dialog from 'vant-weapp/dist/dialog/dialog'
export default {
  name: 'HomeCard',
  components: {
    ImageView
  },
  props: {
    data: {
      type: Object,
      default: () => {}
    },
    hasSign: {
      type: Boolean,
      default: false
    },
    signDay: {
      type: Number,
      default: 0
    }
  },
  methods: {
    gotoShelf() {},
    onBookClick() {},
    sign() {},
    onFeedBackClick() {
      // https://youzan.github.io/vant/#/zh-CN/dialog
      Dialog.confirm({
        title: '反馈',
        message: '你是否确认提交反馈信息',
        confirmButtonText: '是',
        cancelButtonText: '否'
      }).then(() => {
        console.log('点击是之后的事件')
      }).catch(() => {
        console.log('点击否之后的事件')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.home-card {
   margin:22px 20px 0;
   border-radius: 15px;
   background-image: linear-gradient(-90deg, #54575F 0%, #595B60 100%);
  .home-card-inner {
    padding: 21.5px 17px 20px 20px;
    box-sizing: border-box;
    width: 100%;
    position: relative;
    .user-info {
      display: flex;
      align-items: center;
      .avatar-wrapper{
        width:20px;
        height:20px;
      }
      .nickname,.shelf-text{
        font-size:12px;
        color:#fff;
      }
      .nickname{
        margin:0 8.5px;
      }
      .shelf-text{
        opacity: 0.7;
      }
      .round-item{
        width:4px;
        height:4px;
        background: #a2a2a2;
        border-radius: 50%;
        margin: 0 8px;
      }
    }
    .book-info {
      display: flex;
      margin-top: 16.5px;
      .book-wrapper{
        flex:1;
        display: flex;
        align-items: center;
        justify-content: space-around;
        .book-img-warpper{
          width:72px;
          height:101px;
        }
      }
      .shelf-wrapper{
        display: flex;
        align-items: center;
        .shelf{
          width: 11px;
          font-size: 11px;
          word-break: break-word;
          color:#fff;
          opacity: .8;
        }
      }
    }
    .feedback-wrapper {
      position: absolute;
      right: 0;
      top:19.5px;
      width:44.5px;
      height:23.5px;
      line-height: 23.5px;
      text-align: center;
      background: #707070;
      opacity: .3;
      border-radius: 100px 0 0 100px;
      span{
        color:#fff;
        font-size:11px;
      }
    }
  }
}
</style>
