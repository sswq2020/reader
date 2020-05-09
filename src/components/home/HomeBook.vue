<template>
  <div class="home-book">
    <div class="home-book-header">{{title}}</div>
    <div class="home-book-content">
      <div class="home-book-row" v-for="(row,index) in bookData" :key="index">
         <div @click="onBookClick(book)" :style="{flex: '0 0 ' + (100/col) + '%'}" class="home-book-col" v-for="(book,index2) in row" :key="index2">
           <div class="book-wrapper"
             v-if="mode !== HOME_BOOK_MODE.CATEGORY"
            :style="{ flexDirection: mode=== HOME_BOOK_MODE.COL ? 'column' : 'row' }">
              <ImageView :src="book.cover" />
              <div class="book-title-wrapper book-title-col" v-if="mode === HOME_BOOK_MODE.COL">
                <div class="book-title">{{book.title}}</div>
              </div>
              <div class="book-title-wrapper book-title-row" v-else>
                <div class="book-title">{{book.title}}</div>
                <div class="book-title-author-wrapper">
                  <div class="book-author">{{book.author}}</div>
                  <div class="book-category">{{book.categoryText}}</div>
                </div>
              </div>
           </div>

           <div v-else class="category-wrapper">
             <div class="category-text">{{book.text}}</div>
             <div class="category-num">{{book.num}}本书</div>
             <div class="category-img-wrapper">
               <div class="category-img1">
                 <ImageView :src="book.cover" />
               </div>
               <div class="category-img2">
                 <ImageView :src="book.cover2" />
               </div>
             </div>
           </div>
         </div>
      </div>
    </div>
    <div class="home-book-footer" @click="onMoreClick" v-if="showBtn">
      <van-button round custom-class="home-book-btn">{{btnText}}</van-button>
    </div>
  </div>
</template>

<script>
import DICT, {CATEGORY} from 'utils/dict'
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
  data() {
    return {
      HOME_BOOK_MODE: DICT.HOME_BOOK_MODE
    }
  },
  methods: {
    onMoreClick() {
      this.$emit('onMoreClick')
    },
    onBookClick(book) {
      this.$emit('onBookClick', book)
    }
  },
  computed: {
    bookData() {
      const { data, row, col } = this
      if (data && data.length > 0) {
        const number = row * col
        const _bookData = data.slice(0, number).map(book => {
          return {...book, text: CATEGORY[book.categoryText.toLowerCase()]}
        })
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
    margin-top:12.5px;
    .home-book-row{
      display: flex;
      flex-flow: row nowrap;
      margin-top:12px;
      .home-book-col{
        padding: 0 8px;
        box-sizing: border-box;
        .book-wrapper{
          display: flex;
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
            &.book-title-row{
              flex: 0 0 50%;
              padding: 10px;
              display:flex;
              flex-direction: column;
              justify-content: space-between;
              .book-title{
                font-size:14px;
                color:#1F1F1F;
                line-height: 18px;
                max-height:36px;
                overflow: hidden;
                word-break: break-word;
              }
              .book-author,.book-category{
                font-size:12px;
                color:#868686;
                line-height: 14px;
                max-height:14px;
                overflow: hidden;
                word-break: break-word;
              }
            }
          }
        }
        .category-wrapper{
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-sizing: border-box;
          height:96px;
          padding: 13px 0 14.5px 16px;
          background: #f8f9fb;
          border-radius: 10px;

          .category-text{
            width:150px;
            overflow: hidden;
            text-overflow: ellipsis;
            line-height: 22.5px;
            font-size: 16px;
            color: #212832;
          }
          .category-num{
            font-size: 12px;
            color: #868686;
            line-height:16.5px
          }
          .category-img-wrapper{
            position: absolute;
            right: 0;
            bottom: 0;
            .category-img1{
              position: absolute;
              right: 0;
              bottom: -5px;
              z-index: 100;
              width: 48px;
            }
            .category-img2{
              position: absolute;
              right: 30px;
              bottom: -5px;
              z-index: 90;
              width: 36px;

            }
          }
        }
      }
    }
  }
  .home-book-footer {
    margin-top: 12px;
    padding: 0 20px;
  }
}
</style>

<style lang="scss">
  .home-book-footer {
    .home-book-btn{
      width:100%;
      font-size: 14px;
      color: #3696EF;
      border:1px solid #EDEEEE
    }
  }
</style>
