<template>
  <div class="search-bar">
    <div class="search-bar-wrapper">
      <van-icon
       class="search"
       name="search"
       size="16px"
       color="#858C96"
      ></van-icon>
      <!--confirm-typed的含义  @comfirm等价于bindconfirm由mpvue提供转换   https://developers.weixin.qq.com/miniprogram/dev/component/input.html -->
      <input
        :focus="focus"
        :disabled="disabled"
        :placeholder="hotSearch.length ? hotSearch : '搜索'"
        class="search-bar-input"
        confirm-type=“search”
        @comfirm="onConfirm"
        v-model.lazy="searchWord" />
      <van-icon
       class="clear"
       name="clear"
      size="16px"
      color="#858C96"
      @click="onClearClick"
      /></van-icon>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    focus: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    limit: {
      type: Number,
      default: 50
    },
    hotSearch: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      searchWord: ''
    }
  },
  methods: {
    onSearchBarClick() {
      this.$emit('onClick')
    },
    onClearClick() {
      this.searchWord = ''
      this.$emit('onClear')
    },
    onChange(e) {
      // 注意这个不是DOM里的e.target,是微信小程序里的e
      const {value} = e.mp.detail
      this.$emit('onChange', value)
    },
    onConfirm(e) {
      // 注意这个不是DOM里的e.target,是微信小程序里的e
      const {value} = e.mp.detail
      this.$emit('onConfirm', value)
    },
    setValue(value) {
      this.searchWord = value
    },
    getValue() {
      return this.searchWord
    }
  }
}
</script>

<style lang="scss" scoped>
.search-bar{
  padding: 15px 15.5px;
  .search-bar-wrapper{
    display: flex;
    align-items: center;
    height: 40px;
    box-sizing: border-box;
    background: #F5F7F9;
    border-radius: 20px;
    padding: 12px 17px;
    .search-bar-input{
      flex:1;
      margin: 0 8px;
    }
    .search{
      display: flex;
      align-items: center;
      height:100%;
    }
    .clear{
      display: flex;
      align-items: center;
      height:100%;
    }
  }
}
</style>
