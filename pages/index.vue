<template>
  <div class="container">
    <div class="home landing">
      <div class="box">
        <div class="box__header">
          <a href="/" class="white" title="Zur Startseite">
            <h1>{{ content.title }}</h1>
            <p>{{ content.description }}</p>
          </a>
          <div class="box__header__content">
            <div class="box__header__content--video">
              <div class="video-container">
                <video
                  poster="/poster.jpg"
                  autoplay
                  loop
                  autobuffer
                  muted
                  playsinline
                >
                  <source src="/video/portfolio.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div class="box__header__content--text">
              <nuxt-content :document="content" />
              <ul class="socialmedia">
                <li>
                  <a href="https://github.com/lukasniestrat" target="_blank">
                    <GithubIcon :height="25" :width="25" color="#fff" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/thereallukasniestrat"
                    target="_blank"
                  >
                    <InstagramIcon :height="25" :width="25" color="#fff" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="box__footer">
          <nav role="navigation">
            <a href="/projekte">
              <span>Zu meinen Projekten</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
    <AppLegal />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Legal from "./../components/Legal.vue";
import Instagram from "./../components/Instagram.vue";
import Github from "./../components/Github.vue";

export default Vue.extend({
  components: {
    AppLegal: Legal,
    InstagramIcon: Instagram,
    GithubIcon: Github,
  },
  async asyncData({ $content, error }) {
    try {
      const content = await $content("home").fetch();

      return { content };
    } catch (err) {
      error({
        statusCode: 404,
        message: "Content not found",
      });
    }
  },
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
});
</script>

<style lang="scss" scoped>
.box {
  @media screen and (max-width: 960px) {
    height: auto;
    padding: 25px 50px;
    width: 100%;
  }

  background: var(--main-grey);
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  height: 550px;
  margin: 0;
  padding: 50px 75px;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  width: 850px;

  &__header,
  &__footer {
    flex: 1 1 100%;
    position: relative;
    z-index: 2;
  }

  &__header {
    h1 {
      @media screen and (max-width: 960px) {
        text-align: center;
      }

      color: #fff;
      font-size: 2rem;
      font-weight: 700;
      position: relative;
      text-align: left;

      &::after {
        @media screen and (max-width: 960px) {
          left: 50%;
          transform: translate(-50%, -50%);
        }

        background-color: var(--main-color-transparence);
        content: "";
        display: block;
        height: 15px;
        position: absolute;
        left: -25px;
        top: 50%;
        transform: translateY(-50%);
        width: 300px;
        z-index: -1;
      }
    }

    h2 {
      @media screen and (max-width: 960px) {
        text-align: center;
      }
      text-align: left;
    }

    p {
      @media screen and (max-width: 960px) {
        text-align: center;
      }

      text-align: left;
    }

    &__content {
      @media screen and (max-width: 960px) {
        flex-direction: column;
        margin-bottom: 50px;
      }

      align-items: center;
      display: flex;
      flex-direction: row;
      margin-top: 50px;

      &--video {
        @media screen and (max-width: 960px) {
          margin-bottom: 25px;
          margin-right: 0;
        }

        margin-right: 25px;

        .video-container {
          @media screen and (max-width: 960px) {
            height: 175px;
            width: 175px;
          }

          background: var(--main-grey);
          border-radius: 50%;
          height: 225px;
          overflow: hidden;
          position: relative;
          width: 225px;

          video {
            left: 50%;
            position: absolute;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
          }
        }
      }

      &--text {
        @media screen and (max-width: 960px) {
          margin-left: 0;
        }

        margin-left: 25px;
      }
    }
  }

  &__footer {
    @media screen and (max-width: 960px) {
      text-align: center;
    }

    align-self: flex-end;
  }

  .socialmedia {
    display: flex;
    margin-top: 25px;

    li {
      list-style: none;
      margin-right: 10px;
    }
  }
}
</style>
