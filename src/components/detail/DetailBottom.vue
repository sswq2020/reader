<template>
  <div class="detail-bottom">
    <div class="detail-btn-wrapper">
      <van-button
        round
        :custom-class="isInShelf ? 'detail-btn-remove' : 'detail-btn-shelf'"
        @click="handleShelf"
        >
        {{isInShelf ? '移除' : '加入'}}书架
      </van-button>
    </div>
    <div class="detail-btn-wrapper">
      <van-button
        round
        custom-class="detail-btn-read"
        @click="readBook"
      >阅读</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailbottom',
  props: {
    isInShelf: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleShelf() {
      this.$emit('handleShelf')
    },
    readBook() {
      this.$emit('readBook')
    }
  }
}
</script>

<style lang="scss" scoped>
.detail-bottom {
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0;
  background: #fff;
  box-sizing: border-box;
  padding: 0 15px;
  border-top: 1px solid #eee;
  box-shadow: 0 -2px 4px 0 rgba(0, 0, 0, 0.1);
  .detail-btn-wrapper {
    flex: 1;
  }
}
</style>

<style lang="scss">
  .detail-bottom {
    .detail-btn-read {
      width: 100%;
      border: none;
      color: #fff;
      background: #1EA3F5;
      margin-left: 7.5px;
    }

    .detail-btn-shelf {
      width: 100%;
      color: #1EA3F5;
      background: #fff;
      border: 1px solid #1EA3F5;
      margin-right: 7.5px;
    }

    .detail-btn-remove {
      width: 100%;
      color: #F96128;
      background: rgba(255, 175, 155, .3);
      border: 1px solid #FFAF9B;
      margin-right: 7.5px;
    }
  }
</style>
