<template>
  <div>
    <detailbook :book="book"></detailbook>
  </div>
</template>

<script>
import detailbook from 'components/detail/DetailBook'
import { bookDetail } from 'api/index'
import { getStorageSync, showLoading, hideLoading } from 'api/wechat'
export default {
  name: 'detail',
  components: {
    detailbook
  },
  data() {
    return {
      book: null
    }
  },
  methods: {
    async _bookDetail(fileName, openId) {
      showLoading('正在加载')
      const res = await bookDetail(fileName, openId)
      hideLoading()
      this.book = res.data
    }
  },
  mounted() {
    const openId = getStorageSync('openId')
    const {fileName} = JSON.parse(this.$route.query.book)
    this._bookDetail(fileName, openId)
  }
}
</script>

<style lang="scss" scoped>

</style>
