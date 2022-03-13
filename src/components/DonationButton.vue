<template>
  <div
    id="donate-button-container"
    style="display: flex; height: 100%; width: 100%"
  >
    <div id="donate-button" style="height: fit-content; margin: auto"></div>
  </div>
</template>

<script>
export default {
  async mounted() {
    // eslint-disable-next-line no-undef
    PayPal.Donation.Button({
      env: "production",
      hosted_button_id: "QMRX9BXR66M86",
      image: {
        src: "https://www.paypalobjects.com/de_DE/DE/i/btn/btn_donate_LG.gif",
        alt: "Spenden Sie zum Erhalt der heimischen Bienenzucht",
        title: "PayPal",
      },
    }).render("#donate-button");
  },
};
</script>

<style></style>
