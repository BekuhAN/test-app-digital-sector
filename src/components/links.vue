<template>
  <div class="links">
    <div class="links__control">
      <Search />
      <AddLink />
    </div>
    <div class="links__list" v-if="sortedLinks.length">
      <Link v-for="link in sortedLinks" :key="link.id" :link="link" />
    </div>
    <div class="links__null" v-else>Список пуст</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AddLink from "./addLink.vue";
import Search from "./search.vue";
import Link from "./link.vue";
export default {
  data() {
    return {
      linksList: [],
    };
  },
  computed: {
    ...mapGetters(["getLinks", "getActiveGroup", "getFilteredLinks"]),
    sortedLinks() {
      const links =
        this.getFilteredLinks.length > 0
          ? [...this.getFilteredLinks]
          : [...this.getLinks];
      if (this.getActiveGroup > 0) {
        return links.filter(
          (link) => link.groupId === Number(this.getActiveGroup)
        );
      } else {
        return links;
      }
    },
  },
  mounted() {
    this.setLinks();
  },
  methods: {
    ...mapActions(["setLinks"]),
  },
  components: {
    Link,
    AddLink,
    Search,
  },
};
</script>

<style lang="scss">
.links {
  margin-left: 300px;
  padding: 60px 50px;
  height: 100vh;
  overflow-y: auto;
  &__control {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0 20px;
    margin-bottom: 20px;
    font-weight: bold;
    border-bottom: 1px solid #e2e2e2;
  }
  &__list {
    overflow-x: hidden;
  }
}
</style>
