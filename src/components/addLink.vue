<template>
  <div class="new_link">
    <button class="new_link__btn" @click="showModal">Добавить ссылку</button>
    <div class="new_link__modal" v-if="isModal">
      <div class="new_link__modal__wrapper">
        <div class="new_link__modal__close" @click="closeModal">&times;</div>
        <input
          v-model="newLink.name"
          type="text"
          class="new_link__modal__item new_link__modal__link_name"
        />
        <input
          v-model="newLink.src"
          type="url"
          class="new_link__modal__item new_link__modal__link_src"
          required
        />
        <select
          class="new_link__modal__item new_link__modal__link_group"
          v-model="newLink.groupId"
        >
          <option :value="group.id" v-for="group in getGroups" :key="group.id">
            {{ group.name }}
          </option>
        </select>
        <button class="new_link__btn" @click="addedLink">
          Добавить ссылку
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      newLink: {
        id: null,
        name: "",
        src: "",
        groupId: 1,
      },
      isModal: false,
    };
  },
  computed: {
    ...mapGetters(["getGroups", "getLinks"]),
  },
  beforeMount() {
    this.newLink.id = Date.now();
  },
  methods: {
    ...mapActions(["setLinks"]),
    showModal() {
      this.isModal = !this.isModal;
    },
    closeModal() {
      this.newLink.name = "";
      this.newLink.src = "";
      this.showModal();
    },
    addedLink() {
      if (this.newLink.name && this.newLink.src) {
        localStorage.setItem(
          "links",
          JSON.stringify([...this.getLinks, this.newLink])
        );
        this.setLinks();
        this.closeModal();
      } else {
        alert("Заполните все поля!");
      }
    },
  },
};
</script>

<style lang="scss">
.new_link {
  &__btn {
    background: #4dd599;
    color: #fff;
    border: none;
    height: 40px;
    padding: 0px 24px;
    font-size: 18px;
    border-radius: 4px;
    transition: 0.2s;
    &:hover {
      opacity: 0.5;
    }
  }
  &__modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(#000, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    &__wrapper {
      position: relative;
      background: #fff;
      border-radius: 4px;
      padding: 50px;
      display: flex;
      flex-direction: column;
    }
    &__close {
      position: absolute;
      right: -25px;
      top: -35px;
      color: #fff;
      font-size: 32px;
    }
    &__item {
      height: 40px;
      margin-bottom: 20px;
      width: 400px;
      padding-left: 15px;
    }
  }
}
</style>
