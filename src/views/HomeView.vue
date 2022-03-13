<template>
  <div class="view">
    <img
      v-if="!showVideo"
      src="@/assets/portrait.webp"
      height="200"
      width="200"
      alt="Wolfgang Durek"
      @click="toggle"
    />
    <video
      v-if="showVideo"
      ref="player"
      src="@/assets/portrait-animated.mp4"
      loop
      muted
      autoplay
      disableRemotePlayback
      @click="toggle"
    />
    <p>
      <strong>Willkommen!</strong> <br />
      Mein Name ist Wolfgang Durek und Ihr seid auf meiner Internetseite. Hier
      könnt Ihr Kontakt mit mir aufnehmen und neueste Informationen zu meiner
      Bienenzucht lesen.<br /><br />
      Wenn euch die Seite gefällt, zeigt sie doch jemanden
    </p>
    <div style="padding-bottom: 0.5rem">👇</div>
    <div>
      <button class="button is-round" @click="share()">
        <i class="fa fa-share-nodes" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      showVideo: true,
    };
  },
  methods: {
    toggle() {
      this.showVideo = !this.showVideo;
    },
    async share() {
      await navigator.share({
        title: "Bienenzucht W.Durek",
        url: "",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.view {
  text-align: center;
  p {
    text-align: justify;
    padding: 2rem;
    padding-bottom: 0;
    max-width: 500px;
    margin: auto;
    font-size: large;
  }
}
img {
  max-height: 200px;
  border-radius: 50%;
  padding: 1rem;
}
video {
  max-height: 200px;
  border-radius: 50%;
  padding: 1rem;
}
</style>
>
