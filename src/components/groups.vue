<template>
  <div class="groups">
    <div class="groups__title">Группы</div>
    <ul v-if="getGroups" class="groups__list">
      <li
        v-for="group in getGroups"
        :key="group.id"
        @click="selectedGroup(group.id)"
        class="groups__list__item"
        :class="{ active: Number(getActiveGroup) === group.id }"
      >
        {{ group.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getGroups", "getActiveGroup"]),
  },
  beforeMount() {
    this.setGroups();
    this.setActiveGroup();
  },
  methods: {
    selectedGroup(id) {
      localStorage.setItem("activeGroup", id);
      this.setActiveGroup();
    },
    ...mapActions(["setGroups", "setActiveGroup"]),
  },
};
</script>

<style lang="scss">
.groups {
  width: 300px;
  background: #e5e5e5;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 60px 30px;
  &__title {
    font-size: 42px;
    padding-bottom: 20px;
    margin-bottom: 20px;
    font-weight: bold;
    border-bottom: 1px solid #bbb;
  }
  &__list {
    list-style: none;
    &__item {
      padding: 10px 30px;
      width: 100%;
      font-size: 18px;
      transition: 0.2s;
      cursor: pointer;
      &:hover,
      &.active {
        box-shadow: 0px 2px 10px rgba(#000, 0.05);
        background: #fff;
        border-radius: 4px;
      }
    }
  }
}
</style>
