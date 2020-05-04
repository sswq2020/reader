<template>
  <div class="detail-stat">
    <div class="detail-stat-l">
      <div class="detail-stat-rate-wrapper">
        <span class="detail-stat-rate">{{rankAvg}}</span>
        <van-rate
        :size="16"
        :value="rankAvg"
        color="#717882"
        allow-half
        void-color="#DEE0E2"
        void-icon="star"
        ></van-rate>
      </div>
      <div class="detail-stat-rate-hint">{{rankNum}}人点评</div>
    </div>
    <div class="detail-stat-r">
      <div class="detail-stat-num-wrapper">
        <span class="detail-stat-num">{{readerNum}}</span>读过此书
      </div>
      <div class="detail-stat-readers" v-if="readers && readers.length">
        <div class="detail-stat-readers-avatar" v-for="(reader,index) in readers" :key="index">
          <ImageView
            :src="reader.avatarUrl"
            round
          >
          </ImageView>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageView from 'components/base/ImageView'
export default {
  name: 'detailstat',
  components: {
    ImageView
  },
  props: {
    rankAvg: {
      type: Number,
      default: 4.5
    },
    rankNum: {
      type: Number,
      default: 0
    },
    readerNum: {
      type: Number,
      default: 0
    },
    readers: {
      type: Array,
      default: () => []
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.detail-stat{
  display:flex;
  padding:10px 15px;
  .detail-stat-l{
    flex: 0 0 50%;
    width: 50%;
    .detail-stat-rate-wrapper{
      display: flex;
      align-items: center;
      .detail-stat-rate{
        font-size: 24px;
        color: #5E5E5E;
        margin-right: 10px;
      }
    }
    .detail-stat-rate-hint{
      margin-top: 5px;
      font-size: 11px;
      color: #99A0AA;
    }
  }
  .detail-stat-r{
    flex: 0 0 50%;
    width:50%;
    .detail-stat-num-wrapper{
      display: flex;
      align-items: center;
      font-size: 12px;
      color: #99A0AA;
      .detail-stat-num{
        font-size: 24px;
        color: #5E5E5E;
      }
    }
    .detail-stat-readers{
      display: flex;
      font-size: 12px;
      color: #909090;
      .detail-stat-readers-avatar{
        width: 25px;
        height: 25px;
        border-radius: 50%;
        margin-left: -8px;
        border: 1px solid #ccc;
        box-shadow: 0 0 6px 0 rgba(0,0,0,0.20);
        &:first-child {
          margin-left: 0;
        }
      }
    }
  }
}
</style>
