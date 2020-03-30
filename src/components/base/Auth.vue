<template>
  <div class="auth-wrapper">
    <div class="auth">
      <div class="auth-info">
        <div class="auth-img">
          <ImageView  round src="https://www.youbaobao.xyz/mpvue-res/logo.jpg" />
        </div>
        <div class="sub-title">登录小施读书</div>
        <div class="title">免费好书畅快读</div>
      </div>
      <!-- 官方文档https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserInfo.html -->
      <button
        class="auth-btn"
        @getuserinfo="getUserInfo"
        open-type="getUserInfo">
        登录授权
      </button>
    </div>
  </div>
</template>

<script>
import ImageView from 'components/base/ImageView'
export default {
  name: 'Auth',
  components: {
    ImageView
  },
  methods: {
    getUserInfo() {
      this.$emit('getUserInfo')
    }
  }
}
</script>

<style lang="scss" scoped>
.auth-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #999;
  z-index: 1000;
  .auth {
    position: relative;
    width: 270px;
    height: 248px;
    background: #f5f5f5;
    border-radius: 18px;
    .auth-info{
      margin-top: 22.5px;
      display: flex;
      flex-direction: column;
      justify-content:center;
      align-items: center;
      .auth-img{
        width: 74px;
      }
      .sub-title{
        margin-bottom:18px;
        font-size:13px;
        color: #999;
        line-height:18.5px;
      }
      .title{
        font-size:16px;
        color: #333;
        font-weight: 400;
        line-height:22.5px;
        margin-top: 3.5px;
      }
    }
    .auth-btn{
      position: absolute;
      bottom: 0;
      left:0;
      width: 100%;
      height:49px;
      line-height: 49px;
      background-image: linear-gradient(90deg, #1EA3F5 0%, #0F87FC 100%);
      border-radius: 0 0 18px 18px;
      font-size:15px;
      color: #fff;
    }
  }
}
</style>
