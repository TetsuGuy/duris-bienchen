<template>
  <div class="view" v-touch:swipe.left="next" v-touch:swipe.right="prev">
    <div class="image-text-box" v-if="id !== images.length">
      <span>{{ images[id].title }}</span>
      <p>{{ images[id].text }}</p>
    </div>
    <div class="button-group--floating">
      <button class="button is-rounded" v-show="id !== 0" @click="prev">
        <i class="fa fa-arrow-left" />
      </button>
      <button
        class="button is-rounded is-outlined"
        v-show="id !== images.length"
        @click="next"
      >
        <i class="fa fa-arrow-right" />
      </button>
    </div>
    <div
      class="wrapper"
      v-for="(i, index) in images"
      :key="index"
      v-show="id === index"
    >
      <div
        class="wrapper__bg"
        :style="{
          background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${i.url}) center no-repeat`,
        }"
      />
      <img :src="i.url" alt="Gallerie Bild" />
    </div>
    <iframe
      v-show="id === images.length"
      style="max-width: 568px; margin: auto"
      class="wrapper"
      src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmartyna.schmeckt%2Fposts%2F1778100709034524&show_text=true&width=500"
      scrolling="no"
      frameborder="0"
      allowfullscreen="true"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    ></iframe>
  </div>
</template>

<script>
export default {
  data: () => ({
    id: 0,
    images: [
      {
        url: require("@/assets/photo1.webp"),
        title: "Der Bienenkönig",
        text: "...bei der Arbeit!",
      },
      {
        url: require("@/assets/photo2.webp"),
        title: "Wir ❤️ Bienen",
        text: "Das Motto seit 1985!",
      },
      {
        url: require("@/assets/photo3.webp"),
        title: "Die neuen Bienenkästen",
        text: "",
      },
      {
        url: require("@/assets/photo4.webp"),
        title: "Ein Blick von Innen",
        text: "",
      },
      {
        url: require("@/assets/photo5.webp"),
        title: "Sesam öffne Dich",
        text: "Der Eingangsbereich mit Bienenwagen und natürlich farblich meinen fleißigen Arbeiter/Innen angepasst.",
      },
      {
        url: require("@/assets/photo6.webp"),
        title: "Hachi no Ko (蜂の子)",
        text: "bedeutet auf Japanisch: 'Kinder der Bienen', eine Delikatesse und Superfood mit reichlich Protein.",
      },
    ],
  }),
  methods: {
    next() {
      if (this.id <= this.images.length) this.id++;
    },
    prev() {
      if (this.id > 0) this.id--;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: calc(100% - 150px);
  width: 100%;
  display: flex;
  position: relative;
  img {
    object-fit: cover;
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    margin: auto;
    box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.5);
  }
  &__bg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background-size: auto, cover;
    filter: blur(10px) brightness(2) contrast(0.9);
  }
}
.button-group--floating {
  position: absolute;
  bottom: 50%;
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  button:nth-child(2) {
    margin-left: auto;
  }
  button {
    border-color: white;
    border-width: 3px;
    margin: 0.5rem;
    width: 0;
    background: transparent;
    color: white;
    opacity: 0.5;
    font-size: x-large;
    i {
      text-shadow: 0 2px 3px black;
    }
  }
}
.image-text-box {
  position: absolute;
  width: 100%;
  height: 150px;
  z-index: 100;
  background: white;
  bottom: 0;
  padding: 0.5rem;
  filter: drop-shadow(0px -2px 1px rgba(0, 0, 0, 0.4));
  span {
    font-size: x-large;
    font-weight: bold;
  }
}
.view {
  position: relative;
}
iframe {
  padding: 2rem;
}
</style>
