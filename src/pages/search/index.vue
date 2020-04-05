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
    <SearchItem
      icon="apps-o"
      title="计算机科学"
      sub-title="类别"
    ></SearchItem>
    <SearchItem
      icon="apps-o"
      title="计算机科学"
      sub-title="类别"
    ></SearchItem>


  </div>
</template>

<script>
import TagGroup from 'components/base/TagGroup'
import SearchItem from 'components/search/SearchItem'
export default {
  name: 'search',
  components: {
    TagGroup,
    SearchItem
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
      ]
    }
  },
  onTagClick() {},
  onBtnClick() {}
}
</script>

<style lang="scss" scoped>

</style>
