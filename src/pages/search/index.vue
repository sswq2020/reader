<template>
  <div class="">
    <TagGroup
      headerText="热门搜索"
      btnText="换一批"
      :value="tags"
      @onTagClick="onTagClick"
      @onBtnClick="onBtnClick"
    ></TagGroup>
    <SearchItem
      icon="apps-o"
      title="计算机科学"
      sub-title="类别"
    ></SearchItem>
    <SearchTable :data="list"></SearchTable>
  </div>
</template>

<script>
import TagGroup from 'components/base/TagGroup'
import SearchItem from 'components/search/SearchItem'
import SearchTable from 'components/search/SearchTable'
export default {
  name: 'search',
  components: {
    TagGroup,
    SearchItem,
    SearchTable
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
  onTagClick() {},
  onBtnClick() {}
}
</script>

<style lang="scss" scoped>

</style>
