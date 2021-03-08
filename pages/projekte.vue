<template>
  <div class="container container--projects">
    <div class="home projects">
      <div class="box__primary">
        <div class="box__header">
          <a href="/" class="white">
            <h1>{{ content.title }}</h1>
            <p>{{ content.description }}</p>
          </a>
        </div>
        <div class="box__footer">
          <nav role="navigation">
            <a href="/projekte" class="active">
              <span>Meine Projekte</span>
            </a>
          </nav>
        </div>
      </div>
      <div class="box__about">
        <nuxt-content :document="content" />
      </div>
    </div>
    <div class="projects__container">
      <AppProject
        v-for="project of projects"
        :key="project.title"
        :content="project"
      />
    </div>
    <AppLegal />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Project from "./../components/Project.vue";
import Legal from "./../components/Legal.vue";

export default Vue.extend({
  components: {
    AppProject: Project,
    AppLegal: Legal,
  },
  async asyncData({ $content, error }) {
    try {
      const content = await $content("project").fetch();
      const projects = await $content("projects")
        .sortBy("order", "asc")
        .fetch();

      return { content, projects };
    } catch (err) {
      error({
        statusCode: 404,
        message: "Content not found",
      });
    }
  },
  head() {
    return {
      title: "Projekte | Lukas Niestrat - Webdesign & Frontend Entwicklung",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Über die Jahre habe ich bereits viele tolle Projekte für großartige Kunden umgesetzt, das hier ist nur eine kleine Auswahl meiner Arbeiten.",
        },
      ],
    };
  },
});
</script>
<style lang="scss" scoped>
.box {
  &__primary {
    @media screen and (max-width: 1080px) {
      height: 225px;
      width: 100%;
    }

    background-color: var(--main-grey);
    display: flex;
    flex-wrap: wrap;
    height: 275px;
    padding: 50px;
    width: 360px;
  }

  &__header,
  &__footer {
    flex: 1 1 100%;
    position: relative;
    z-index: 2;
  }

  &__footer {
    align-self: flex-end;
  }

  &__about {
    @media screen and (max-width: 1080px) {
      position: relative;
      width: 100%;
    }

    align-content: center;
    height: 275px;
    padding: 50px;
    position: absolute;
    right: 0;
    transform: translateZ(0);
    width: 720px;
    z-index: 0;
  }
}

.projects__container {
  margin: 0 auto;
  max-width: 1080px;
  padding-top: 100px;
  transition: all 0.5s ease-in-out;
  width: 100%;
  z-index: 0;
}
</style>
