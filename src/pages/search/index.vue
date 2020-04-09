<template>
  <div class="">
    <TagGroup
      headerText="热门搜索"
      btnText="换一批"
      :value="tags"
      @onTagClick="onTagClick"
      @onBtnClick="onBtnClick"
    ></TagGroup>
    <SearchList :data="data"></SearchList>
  </div>
</template>

<script>
import TagGroup from 'components/base/TagGroup'
import SearchList from 'components/search/SearchList'

export default {
  name: 'search',
  components: {
    TagGroup,
    SearchList
  },
  data() {
    return {
      tags: [
        'aaa',
        'bbb',
        'ccc',
        'ddd',
        'ddd',
        'ddd',
        'ddd',
        'ddd',
        'ddd'
      ],
      item: [
        {
          icon: 'apps-o',
          title: '计算机科学',
          subTitle: '类别'
        },
        {
          icon: 'apps-o',
          title: '计算机科学',
          subTitle: '类别'
        },
        {
          icon: 'apps-o',
          title: '计算机科学',
          subTitle: '类别'
        }
      ],
      list: [
        {
          'id': 19,
          'fileName': '2018_Book_AutonomousControlForAReliableI',
          'cover': 'https://www.youbaobao.xyz/book/res/img/ComputerScience/978-3-319-90415-3_CoverFigure.jpg',
          'title': 'Autonomous Control for a Reliable Internet of Services',
          'author': 'Ivan Ganchev',
          'publisher': 'Springer International Publishing',
          'bookId': '2018_Book_AutonomousControlForAReliableI',
          'category': 1,
          'categoryText': 'ComputerScience',
          'language': 'en',
          'rootFile': 'OEBPS/package.opf'
        }, {
          'id': 20,
          'fileName': '2018_Book_ComputerAidedVerification',
          'cover': 'https://www.youbaobao.xyz/book/res/img/ComputerScience/978-3-319-96142-2_CoverFigure.jpg',
          'title': 'Computer Aided Verification',
          'author': 'Hana Chockler',
          'publisher': 'Springer International Publishing',
          'bookId': '2018_Book_ComputerAidedVerification',
          'category': 1,
          'categoryText': 'ComputerScience',
          'language': 'en',
          'rootFile': 'OEBPS/package.opf'
        },
        {
          'id': 19,
          'fileName': '2018_Book_AutonomousControlForAReliableI',
          'cover': 'https://www.youbaobao.xyz/book/res/img/ComputerScience/978-3-319-90415-3_CoverFigure.jpg',
          'title': 'Autonomous Control for a Reliable Internet of Services',
          'author': 'Ivan Ganchev',
          'publisher': 'Springer International Publishing',
          'bookId': '2018_Book_AutonomousControlForAReliableI',
          'category': 1,
          'categoryText': 'ComputerScience',
          'language': 'en',
          'rootFile': 'OEBPS/package.opf'
        }, {
          'id': 20,
          'fileName': '2018_Book_ComputerAidedVerification',
          'cover': 'https://www.youbaobao.xyz/book/res/img/ComputerScience/978-3-319-96142-2_CoverFigure.jpg',
          'title': 'Computer Aided Verification',
          'author': 'Hana Chockler',
          'publisher': 'Springer International Publishing',
          'bookId': '2018_Book_ComputerAidedVerification',
          'category': 1,
          'categoryText': 'ComputerScience',
          'language': 'en',
          'rootFile': 'OEBPS/package.opf'
        }
      ]
    }
  },
  computed: {
    data() {
      return {item: this.item, list: this.list}
    }
  },
  onTagClick() {},
  onBtnClick() {}
}
</script>

<style lang="scss" scoped>

</style>
