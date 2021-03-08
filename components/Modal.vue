<template>
  <div class="modal">
    <div class="modal__wrapper">
      <div class="modal__inner">
        <button type="button" class="close-modal" @click="closeModal()">
          <span>
            <CloseIcon :width="15" :height="15" color="#2d2d2d" />
          </span>
        </button>
        <nuxt-content :document="content" />
      </div>
    </div>
    <div class="modal__shadow"></div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Close from "./../components/Close.vue";

export default Vue.extend({
  components: {
    CloseIcon: Close,
  },
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  methods: {
    closeModal(): void {
      this.$emit("toggleModal");
    },
  },
});
</script>
<style lang="scss" scoped>
.modal {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 999;

  &__wrapper {
    position: relative;
    width: 100%;
  }

  &__inner {
    @media screen and (max-width: 960px) {
      width: 90%;
    }

    background-color: #fff;
    border-radius: 5px;
    left: 50%;
    margin-top: 75px;
    padding: 50px;
    position: fixed;
    transform: translateX(-50%);
    height: auto;
    width: 550px;
    z-index: 9999;

    .close-modal {
      color: var(--main-grey);
      position: absolute;
      right: 12px;
      top: 10px;
      padding: 5px;

      span {
        svg {
          margin: 0;
        }
      }

      &:hover {
        color: #fff;
      }
    }
  }

  &__shadow {
    background-color: rgba(0, 0, 0, 0.66);
    height: 100%;
    position: fixed;
    width: 100%;
  }
}
</style>
