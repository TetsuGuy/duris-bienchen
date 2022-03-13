<template>
  <div id="main">
    <nav>
      <router-link to="/">
        <div class="nav-btn"><i class="fa fa-home" />Home</div>
      </router-link>
      <router-link to="/gallery">
        <div class="nav-btn"><i class="fa fa-photo" />Bilder</div>
      </router-link>
      <router-link to="/contact">
        <div class="nav-btn"><i class="fa fa-person" />Kontakt</div>
      </router-link>
      <router-link to="/news">
        <div class="nav-btn"><i class="fa fa-newspaper" />Neues</div>
      </router-link>
      <a href="#">
        <div class="nav-btn nav-btn--donate">
          <i class="fa-solid fa-hand-holding-heart" />Spende<donation-button
            id="btn-paypal"
          />
        </div>
      </a>
    </nav>
    <router-view />
    <twitter-timeline />
  </div>
</template>

<script>
import DonationButton from "./components/DonationButton.vue";
import TwitterTimeline from "./components/TwitterTimeline.vue";
export default {
  components: {
    DonationButton,
    TwitterTimeline,
  },
};
</script>

<style lang="scss">
$heigth-navbar: 60px;
html {
  overflow: hidden !important;
  cursor: url("./assets/bee.cur"), auto;
}
body {
  margin: 0;
}
#app {
  width: 100vw;
  height: 100vh;
}
#main {
  width: 100%;
  height: 100%;
  > .view {
    height: calc(100vh - $heigth-navbar);
    overflow-y: auto;
  }
}

nav {
  height: $heigth-navbar;
  background: yellow;
  display: inline-flex;
  width: 100%;
  border-bottom: 1px solid lightgray;
  .nav-btn {
    height: 100%;
    padding: 0.25rem;
    text-align: center;
    i {
      width: 100%;
      font-size: x-large;
    }
    &--donate {
      color: #485fc7;
      position: relative;
      #btn-paypal {
        position: absolute;
        top: 0;
        opacity: 0;
      }
    }
  }
  a {
    border-width: 0 1px;
    border-color: lightgray;
    border-style: solid;
    flex: 1;
    max-width: 150px;
  }
  a + a {
    border-left-width: 0;
  }
}
</style>
