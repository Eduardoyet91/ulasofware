<template>
  <div class="skeleton-overview">
      <header>
        <sl-skeleton style="--color: #999999" effect="pulse"></sl-skeleton>
        <sl-skeleton style="--color: #999999" effect="pulse"></sl-skeleton>
      </header>
     
      <sl-skeleton style="--color: #999999" effect="pulse"></sl-skeleton>
      <sl-skeleton style="--color: #999999" effect="pulse"></sl-skeleton>
      <sl-skeleton style="--color: #999999" effect="pulse"></sl-skeleton>
  </div>



</template>

<script setup>
import { ref } from 'vue';
import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.82/dist/components/skeleton/skeleton.js';
import '@shoelace-style/shoelace/dist/themes/light.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';

setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.82/dist/');


</script>
<style>
  .skeleton-effects {
    font-size: var(--sl-font-size-small);
  }

  .skeleton-effects sl-skeleton:not(:first-child) {
    margin-top: 1rem;
  }

  .skeleton-overview header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  .skeleton-overview header sl-skeleton:last-child {
    flex: 0 0 auto;
    width: 80%;
  }

  .skeleton-overview sl-skeleton {
    margin-bottom: 1rem;
  }

  .skeleton-overview sl-skeleton:nth-child(1) {
    float: left;
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
    vertical-align: middle;
  }

  .skeleton-overview sl-skeleton:nth-child(3) {
    width: 95%;
  }

  .skeleton-overview sl-skeleton:nth-child(4) {
    width: 80%;
  }
</style>