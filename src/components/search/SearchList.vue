<template>
  <div class="search-list-wrapper">
    <SearchItem
    :icon="category.icon"
    :title="category.title"
    :sub-title="category.subTitle"
    @onClick="showList(category.title,'category')"
    />
    <SearchItem
    :icon="author.icon"
    :title="author.title"
    :sub-title="author.subTitle"
    @onClick="showList(author.title,'author')"
    />
    <SearchItem
    :icon="publisher.icon"
    :title="publisher.title"
    :sub-title="publisher.subTitle"
    @onClick="showList(publisher.title,'publisher')"
    />
    <SearchTable @onClick="onBookClick"  :data="data.list"/>
  </div>
</template>

<script>
import SearchItem from './SearchItem'
import SearchTable from './SearchTable'
export default {
  name: 'SearchList',
  components: {
    SearchItem,
    SearchTable
  },
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    category() {
      return this.data.item[0]
    },
    author() {
      return this.data.item[1]
    },
    publisher() {
      return this.data.item[2]
    }
  },
  methods: {
    showList(text, key) {
      console.info(text, key)
    },
    onBookClick(book) {
      console.log(book)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
