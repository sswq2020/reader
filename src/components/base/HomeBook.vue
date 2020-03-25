<template>
  <div class="home-book">
    <div class="home-book-header">{{title}}</div>
    <div class="home-book-content">
      <div class="home-book-row" v-for="(row,index) in bookData" :key="index">
         <div :style="{flex: '0 0' + (100/col) + '%'}" class="home-book-col" v-for="(book,index2) in row" :key="index2">
           <div class="book-wrapper">
             <ImageView :src="book.cover" />
              <div class="book-title-wrapper book-title-col">
                <div class="book-title">{{book.title}}</div>
              </div>

           </div>
         </div>
      </div>

    </div>
    <div class="home-book-footer"></div>
  </div>
</template>

<script>
import DICT from 'utils/dict'
import ImageView from 'components/base/ImageView'
export default {
  name: 'HomeBook',
  components: {
    ImageView
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    data: {
      type: Array,
      default: []
    },
    btnText: {
      type: String,
      default: ''
    },
    row: {
      type: Number,
      default: 0
    },
    col: {
      type: Number,
      default: 1
    },
    mode: {
      type: String,
      default: DICT.HOME_BOOK_MODE.ROW
    },
    showTitle: {
      type: Boolean,
      default: true
    },
    showBtn: {
      type: Boolean,
      default: true
    },
    linearBg: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onMoreClick() {},
    onBookClick() {}
  },
  computed: {
    bookData() {
      const { data, row, col } = this
      if (data && data.length > 0) {
        const number = row * col
        const _bookData = data.slice(0, number)
        let _bookDataRow = []
        let flag = false
        for (let i = 0; i < row; i++) {
          if (flag) { break }
          let rowArr = []
          for (let k = 0; k < col && (i * col + k) <= _bookData.length - 1; k++) {
            rowArr.push(_bookData[i * col + k])
            if ((i * col + k) === _bookData.length - 1) {
              flag = true
              break
            }
          }
          _bookDataRow.push(rowArr)
        }
        console.log(_bookDataRow)
        return _bookDataRow
      } else {
        return []
      }
    }
  },
  mounted() {
    console.log(this.bookData)
  }
}
</script>

<style lang="scss" scoped>
.home-book {
  .home-book-header {
    padding: 13px 0 0 20.5px;
  }
  .home-book-content {
    padding: 0 12px;
    margin-top:22.5px;
    .home-book-row{
      display: flex;
      flex-flow: row nowrap;
      .home-book-col{
        padding: 0 8px;
        box-sizing: border-box;
        .book-wrapper{
          .book-title-wrapper{
            &.book-title-col{
              .book-title{
                font-size:12px;
                color:#212731;
                line-height: 16.5px;
                max-height:33px;
                font-weight: 500;
                overflow: hidden;
                word-break: break-word;
              }
            }
          }
        }
      }
    }
  }
  .home-book-footer {
  }
}
</style>
