<template>
  <div class="">
    <TagGroup
      headerText="热门搜索"
      btnText="换一批"
      :value="tags"
      @onTagClick="onTagClick"
      @onBtnClick="onBtnClick"
    ></TagGroup>
  </div>
</template>

<script>
import TagGroup from 'components/base/TagGroup'
export default {
  name: 'search',
  components: {
    TagGroup
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
