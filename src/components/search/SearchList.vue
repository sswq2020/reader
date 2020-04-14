<template>
  <div class="search-list-wrapper">
    <SearchItem
    icon="apps-o"
    :title="category"
    sub-title="Category"
    @onClick="showList(category.title,'category')"
    v-if="category"
    />
    <SearchItem
    icon="user-o"
    :title="author"
    sub-title="Author"
    @onClick="showList(author.title,'author')"
    v-if="author"
    />
    <SearchItem
    icon="newspaper-o"
    :title="publisher"
    sub-title="Publisher"
    @onClick="showList(publisher.title,'publisher')"
    v-if="publisher"
    />
    <SearchTable @onClick="onBookClick"  :data="data.book"/>
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
      if (this.data && this.data.category && this.data.category.length) {
        return this.data.category[0].categoryText
      } else {
        return null
      }
    },
    author() {
      if (this.data && this.data.author && this.data.author.length) {
        return this.data.author[0].author
      } else {
        return null
      }
    },
    publisher() {
      if (this.data && this.data.publisher && this.data.publisher.length) {
        return this.data.publisher[0].publisher
      } else {
        return null
      }
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
