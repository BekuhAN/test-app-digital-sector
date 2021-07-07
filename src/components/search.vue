<template>
  <div class="search">
    <input
      v-model="searchText"
      class="search__item"
      type="text"
      placeholder="Поиск"
      @input="searchLink()"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      searchText: "",
    };
  },
  computed: {
    ...mapGetters(["getLinks", "getFilteredLinks"]),
  },
  methods: {
    searchLink() {
      this.$store.dispatch(
        "setFilteredLinks",
        this.getLinks.filter((link) => link.name.includes(this.searchText))
      );
    },
  },
};
</script>

<style lang="scss">
.search {
  &__item {
    height: 40px;
    font-size: 18px;
    width: 400px;
    padding: 0px 15px;
    border-radius: 4px;
    border: 1px solid #e2e2e2;
  }
}
</style>
