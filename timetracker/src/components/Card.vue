<template>
  <!-- v-for directive genererer et Card instance for hvert object i data.json.
  Dvs. at den genererer cards helt dynamisk uten å hardcode hvor mange cards
  det skal være. Korrekt icon har blitt renamet til title objectet slik
  at det også kan hentes inn dynamisk. Time hentes inn som en prop fra
  sidebar component og brukes til å hente ut rett data fra json. La også til 
  bakgrunnsfarge på kortene som et key/value pair i json filen slik at det også kunne hentes
  inn dynamisk-->
  <div
    class="cardContainer"
    v-for="card in carddata"
    v-bind:key="card.title"
    v-bind:style="`background-color: ${card.color}`"
  >
    <img class="categoryIcon" :src="require(`../assets/${card.title}.svg`)" />
    <div class="cardTxtBox">
      <p class="cardTitle">{{ card.title }}</p>
      <img class="elipse" src="../assets/icon-ellipsis.svg" alt="" />
      <h1 class="current">{{ card.timeframes[time].current }}hrs</h1>
      <!-- v-if direktivet gir meg en if/else som html attributes -->
      <p class="previous" v-if="time == 'daily'">
        Yesterday - {{ card.timeframes[time].previous }} hrs
      </p>
      <p class="previous" v-else-if="time == 'weekly'">
        Last Week - {{ card.timeframes[time].previous }} hrs
      </p>
      <p class="previous" v-else>
        Last Month - {{ card.timeframes[time].previous }} hrs
      </p>
    </div>
  </div>
</template>

<script>
// Vi laster inn json filen, og registrerer den som en variabel i component
// slik at den kan brukes i template og vue holder øye med state.

import data from "./data.json";

export default {
  name: "Card",
  data() {
    return {
      carddata: data,
    };
  },
  props: {
    time: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
