<template>
  <div class="link">
    <div class="link__name">{{ link.name }}</div>
    <div class="link__src">
      <a :href="link.src">{{ link.src }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["link"],
};
</script>

<style lang="scss">
.link {
  margin-bottom: 20px;
  &__name {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 5px;
  }
  &__src {
    word-wrap: break-word;
  }
}
</style>
