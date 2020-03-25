<template>
  <div class="home">
    <SearchBar :disabled="false" @onClick="onSearchBarkClick" />
    <HomeCard />
    <HomeBanner
      @onClick="onBannerClick"
      img="http://www.youbaobao.xyz/book/res/bg.jpg"
      subTitle="立刻体验"
      title="镇江公交查询小程序指南"
    />
    <div class="home-book">
      <HomeBook
        title="为你推荐"
        row="4"
        col="2"
        :data="data"
      />
    </div>
  </div>
</template>

<script>
import SearchBar from 'components/home/SearchBar'
import ImageView from 'components/base/ImageView'
import HomeCard from 'components/base/HomeCard'
import HomeBanner from 'components/base/HomeBanner'
import HomeBook from 'components/base/HomeBook'
export default {
  components: {
    SearchBar,
    ImageView,
    HomeCard,
    HomeBanner,
    HomeBook
  },
  methods: {
    onSearchBarkClick() {
      // 跳转到搜索页面
    },
    onBannerClick() {
      console.log('Banner CLick')
    }
  },
  watch: {
    src(newV, oldV) {}
  },
  data() {
    return {
      data: [{
        'id': 34,
        'fileName': '2018_Book_GeographiesOfTheUniversity',
        'cover': 'https://www.youbaobao.xyz/book/res/img/Geography/978-3-319-75593-9_CoverFigure.jpg',
        'title': 'Geographies of the University',
        'author': 'Peter Meusburger',
        'publisher': 'Springer International Publishing',
        'bookId': '2018_Book_GeographiesOfTheUniversity',
        'category': 7,
        'categoryText': 'Geography',
        'language': 'en',
        'rootFile': 'OEBPS/package.opf'
      },
      {
        'id': 59,
        'fileName': '2018_Book_DrinkingInVictorianAndEdwardia',
        'cover': 'https://www.youbaobao.xyz/book/res/img/History/978-3-319-92964-4_CoverFigure.jpg',
        'title': 'Drinking in Victorian and Edwardian Britain',
        'author': 'Thora Hands',
        'publisher': 'Springer International Publishing',
        'bookId': '2018_Book_DrinkingInVictorianAndEdwardia',
        'category': 8,
        'categoryText': 'History',
        'language': 'en',
        'rootFile': 'OEBPS/package.opf'
      },
      {
        'id': 60,
        'fileName': '2018_Book_HarnessingThePowerOfTheCrimina',
        'cover': 'https://www.youbaobao.xyz/book/res/img/History/978-3-319-77908-9_CoverFigure.jpg',
        'title': 'Harnessing the Power of the Criminal Corpse',
        'author': 'Sarah Tarlow',
        'publisher': 'Springer International Publishing',
        'bookId': '2018_Book_HarnessingThePowerOfTheCrimina',
        'category': 8,
        'categoryText': 'History',
        'language': 'en',
        'rootFile': 'OEBPS/package.opf'
      },
      {
        'id': 75,
        'fileName': '2018_Book_TheEuropeanBloodAndMarrowTrans',
        'cover': 'https://www.youbaobao.xyz/book/res/img/MedicineAndPublicHealth/978-3-319-50026-3_CoverFigure.jpg',
        'title': 'The European Blood and Marrow Transplantation Textbook for Nurses',
        'author': 'Michelle Kenyon',
        'publisher': 'Springer International Publishing',
        'bookId': '2018_Book_TheEuropeanBloodAndMarrowTrans',
        'category': 17,
        'categoryText': 'MedicineAndPublicHealth',
        'language': 'en',
        'rootFile': 'OEBPS/package.opf'
      }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.home-book {
  margin-top: 23px;
}
</style>
