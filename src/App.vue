<template>
  <div id="app">
    <Groups />
    <Links />
  </div>
</template>

<script>
import Groups from "./components/groups.vue";
import Links from "./components/links.vue";
export default {
  name: "App",
  data() {
    return {
      defaultGroups: [
        {
          id: 1,
          name: "Видео",
        },
        {
          id: 2,
          name: "Музыка",
        },
        {
          id: 3,
          name: "Кино",
        },
        {
          id: 4,
          name: "Frontend",
        },
      ],
      defaultLinks: [],
      activeGroup: 0,
    };
  },
  created() {
    if (!localStorage.getItem("groups")) {
      localStorage.setItem("groups", JSON.stringify(this.defaultGroups));
    }
    if (!localStorage.getItem("links")) {
      localStorage.setItem("links", JSON.stringify(this.defaultLinks));
    }
    localStorage.setItem("activeGroup", this.activeGroup);
  },
  components: {
    Groups,
    Links,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: LatoRegular;
  color: #2c3e50;
  overflow: hidden;
  height: 100vh;
}
</style>
