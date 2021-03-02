<template>
  <div class="container">
    <div class="home">
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
                  poster=""
                  muted="muted"
                  autoplay="autoplay"
                  loop="loop"
                  preload="auto"
                >
                  <source src="/video/portfolio.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div class="box__header__content--text">
              <nuxt-content :document="content" />
            </div>
          </div>
        </div>
        <div class="box__footer">
          <nav role="navigation">
            <a href="/projekte">
              <span>Projekte</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
    <div class="legal">
      © {{ year }} - <a href="/impressum" class="">Impressum</a> -
      <a href="/datenschutz" class="">Datenschutz</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
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
.home {
  @media screen and (max-width: 960px) {
    height: auto;
    margin: calc((100vh - 620px) / 2) auto 0;
    width: 100%;
  }

  display: flex;
  flex-wrap: wrap;
  height: 550px;
  margin: calc((100vh - 550px) / 2) auto 0;
  position: relative;
  transform: translateZ(0);
  transition: all 0.5s ease-in-out;
  width: 850px;
  z-index: 2;

  .box {
    @media screen and (max-width: 960px) {
      padding: 25px 50px;
      height: auto;
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

      nav {
        a {
          color: #fff;
          display: inline-block;
          position: relative;
          text-transform: uppercase;

          &:hover {
            &::before {
              opacity: 1;
              transform: translateY(0) scale(1);
              visibility: visible;
            }
          }

          &::before {
            background: var(--main-color);
            border-radius: 4px;
            bottom: -3px;
            content: "";
            display: block;
            left: -6px;
            position: absolute;
            top: -3px;
            right: -6px;
            opacity: 0;
            transform: scale(0.7);
            transition: all 0.2s ease-in-out;
            visibility: hidden;
            z-index: 1;
          }

          span {
            position: relative;
            z-index: 2;
          }
        }
      }
    }
  }
}

.legal {
  bottom: env(safe-area-inset-bottom);
  bottom: 0;
  color: var(--light-grey-text);
  font-size: 0.75rem;
  height: 35px;
  padding: 9px 6px;
  position: absolute;
  text-align: center;
  width: 100%;

  a {
    color: var(--light-grey-text);
  }
}
</style>
