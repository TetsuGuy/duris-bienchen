<template>
  <div class="view" style="padding: 0.5rem">
    <div class="columns is-multiline is-mobile" style="margin: 0">
      <div class="column is-4">PayPal:</div>
      <div class="column is-8">
        <donation-button id="btn-paypal" />
      </div>
      <div class="column is-4">Überweisung:</div>
      <div class="column is-8">Bald verfügbar!</div>
    </div>
  </div>
</template>

<script>
import DonationButton from "@/components/DonationButton.vue";

export default {
  components: {
    DonationButton,
  },
};
</script>
