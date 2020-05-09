<template>
  <div>
    <detailbook :book="book"></detailbook>
    <detailstat v-if="book"
      :readers="book.readers"
      :readerNum="book.readerNum"
      :rankAvg="book.rankAvg"
      :rankNum="book.rankNum"
    ></detailstat>
    <detailrate :value="rate" @rateChange="ratechange"></detailrate>
    <detailcontents @readBook="readBook" :contents="contents"></detailcontents>
    <detailbottom :isInShelf="isInShelf" @handleShelf="handleShelf"></detailbottom>
  </div>
</template>

<script>
import detailbook from 'components/detail/DetailBook'
import detailrate from 'components/detail/DetailRate'
import detailstat from 'components/detail/DetailStat'
import detailcontents from 'components/detail/DetailContents'
import detailbottom from 'components/detail/DetailBottom'

import { bookDetail, bookContents, bookIsInShelf, saveShlef, removeShlef } from 'api/index'
import {
  setStorageSync,
  getStorageSync,
  showLoading,
  hideLoading,
  showModal
} from 'api/wechat'
export default {
  name: 'detail',
  components: {
    detailbook,
    detailrate,
    detailstat,
    detailcontents,
    detailbottom
  },
  data() {
    return {
      book: null,
      rate: getStorageSync('rate') || 0,
      contents: [],
      isInShelf: false
    }
  },
  methods: {
    async _bookDetail(fileName, openId) {
      showLoading('正在加载')
      const res = await bookDetail(fileName, openId)
      const _res_ = await bookContents(fileName)
      const flag = await this._getBookShelfStatus(fileName, openId)
      hideLoading()
      this.book = res.data
      this.contents = _res_.data
      this.isInShelf = flag
    },
    async _getBookShelfStatus(fileName, openId) {
      const res = await bookIsInShelf(fileName, openId)
      return !!((res.data && res.data.length))
    },
    ratechange(rate) {
      console.log('轻点评分' + rate)
      this.rate = rate
      setStorageSync('rate', rate)
    },
    readBook(nav) {
      console.log('跳转到阅读器', nav)
    },
    async handleShelf() {
      let that = this
      const {openId, fileName} = that._getOpenIdAndFileName()
      if (!openId || !fileName) {
        return
      }
      switch (!that.isInShelf) {
        case true:
          showLoading('正在放入书架中...')
          const res = await saveShlef(fileName, openId)
          hideLoading()
          if (res.error_code === 0) {
            const flag = await that._getBookShelfStatus(fileName, openId)
            that.isInShelf = flag
          }
          break
        default:
          showModal(
            '提示',
            `是否将《${that.book.title}》移除书架`,
            () => {
              that.successFn(fileName, openId)
            }
          )
          break
      }
    },
    /** *封装模态框确认成功时的回调函数**/
    async successFn(fileName, openId) {
      showLoading('正在从书架中移除...')
      const res = await removeShlef(fileName, openId)
      hideLoading()
      if (res.error_code === 0) {
        const flag = await this._getBookShelfStatus(fileName, openId)
        this.isInShelf = flag
      }
    },
    /** *封装获取openId和FileName的**/
    _getOpenIdAndFileName() {
      const openId = getStorageSync('openId')
      const { fileName } = this.$route.query
      return {openId, fileName}
    }
  },
  mounted() {
    const {openId, fileName} = this._getOpenIdAndFileName()
    this._bookDetail(fileName, openId)
  }
}
</script>

<style lang="scss" scoped>
</style>
