<template>
  <div class="project__wrapper">
    <div class="project">
      <div class="row row--primary">
        <div class="project__inner title">
          <div class="project__inner__header">
            <h2>{{ content.title }}</h2>
            <ul>
              <li v-for="tag in tags" :key="tag">
                {{ tag }}
              </li>
            </ul>
            <p>{{ content.date }}</p>
            <button type="button" @click="toggleModal()">
              <span
                >Infos zum Projekt <InfoIcon :width="15" :height="15"
              /></span>
            </button>
          </div>
          <div v-if="content.link != ''" class="project__inner__footer">
            <a
              :href="content.link"
              :title="`${content.title} Website`"
              target="_blank"
              >Zur Website 🔗</a
            >
          </div>
        </div>
        <div class="project__inner logo">
          <div class="image__container">
            <img :src="content.icon" :alt="`${content.title} Beispiel Bild`" />
          </div>
        </div>
      </div>
      <div class="row row--secondary">
        <div class="project__inner right">
          <div class="image__container">
            <img :src="content.image" :alt="`${content.title} Beispiel Bild`" />
          </div>
        </div>
      </div>
    </div>
    <AppModal
      v-if="modalOpen"
      :content="content"
      @toggleModal="toggleModal()"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Info from "./../components/Info.vue";
import Modal from "./../components/Modal.vue";

export default Vue.extend({
  components: {
    InfoIcon: Info,
    AppModal: Modal,
  },
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  data: () => {
    return {
      modalOpen: false,
    };
  },
  computed: {
    tags(): Array<String> {
      return this.content.tags.split(",");
    },
  },
  methods: {
    toggleModal(): void {
      this.modalOpen = !this.modalOpen;
    },
  },
});
</script>

<style lang="scss" scoped>
.project {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 120px;

  .row {
    display: flex;
    flex: 1 1 100%;
    flex-wrap: wrap;

    &--primary {
      @media screen and (max-width: 960px) {
        max-width: 100%;
      }

      max-width: 360px;
    }

    &--secondary {
      @media screen and (max-width: 960px) {
        max-width: 100%;
      }

      max-width: 720px;
    }
  }

  &__inner {
    @media screen and (max-width: 960px) {
      height: auto;
      width: 100%;
    }

    display: flex;
    height: 360px;
    flex-wrap: wrap;
    margin: 0;
    overflow: hidden;
    padding: 50px;
    transition: all 0.5s ease-in-out;
    width: 360px;

    &.title {
      background: var(--main-grey);
      color: #fff;

      h2 {
        align-items: center;
        display: flex;
        font-size: 1.15rem;

        svg {
          margin-left: 8px;
        }
      }

      ul {
        display: flex;
        list-style: none;
        margin: 20px 0;

        li {
          background-color: #5f5f5f;
          border-radius: 4px;
          font-size: 0.85rem;
          padding: 1px 8px;
          margin-right: 5px;
        }
      }

      button {
        margin-top: 25px;
      }
    }

    &.logo {
      padding: 0;
    }

    &.right {
      @media screen and (max-width: 960px) {
        height: auto;
        width: 100%;
      }

      height: 720px;
      padding: 0;
      width: 720px;
    }

    &__header,
    &__footer {
      flex: 1 1 100%;
      position: relative;
      z-index: 2;
    }

    &__footer {
      align-self: flex-end;

      a {
        font-size: 0.85rem;
      }
    }
  }
}
</style>
