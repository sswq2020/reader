<template>
  <div class="detail-rate">
    <div class="detail-rate-text">轻点评分</div>
    <div class="detail-rate-wrapper">
      <van-rate :value="value" @change="onChange"></van-rate>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailrate',
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  methods: {
    onChange(e) {
      const rate = e.mp.detail
      this.$emit('rateChange', rate)
    }
  }
}
</script>

<style lang="scss" scoped>
.detail-rate {
  display: flex;
  align-items: ceneter;
  padding: 10px 0;
  margin: 0 15px;
  border-bottom: 1px solid #EBEBEB;
  .detail-rate-text {
    font-size: 14px;
    color: #909090;
  }
  .detail-rate-wrapper {
    flex: 1;
    text-align: right;
  }
}
</style>
