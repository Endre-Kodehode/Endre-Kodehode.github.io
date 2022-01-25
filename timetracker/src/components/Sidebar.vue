<template>
  <div class="navbar">
    <div class="sidebarContainer">
      <img class="profilepic" src="../assets/image-jeremy.png" alt="" />
      <div class="picBorder"></div>
      <div class="sidebarTitle">
        <p class="smallTxt">Report for</p>
        <p class="profileName">
          Jeremy <br />
          Robson
        </p>
      </div>
    </div>

    <!-- //Linker aktiverer method som setter variabel til rett timeframe og gir klasse highlighter
    //hvis variabel korresponderer. Variabelen sendes til Card component. -->

    <div class="links">
      <button
        class="timeToggle"
        @click="timeClick('daily')"
        :class="{ highlight: time == 'daily' }"
      >
        Daily
      </button>
      <button
        class="timeToggle"
        @click="timeClick('weekly')"
        :class="{ highlight: time == 'weekly' }"
      >
        Weekly
      </button>
      <button
        class="timeToggle"
        @click="timeClick('monthly')"
        :class="{ highlight: time == 'monthly' }"
      >
        Monthly
      </button>
    </div>
  </div>
  <!-- her injectes ett instance av card component og mottar variabelen time som en prop -->
  <Card :time="time" />
</template>

<script>
import data from "./data.json";
import Card from "./Card.vue";
export default {
  name: "Sidebar",
  components: {
    Card,
  },
  data() {
    return {
      card: data,
      time: "daily",
      clicked: false,
    };
  },
  methods: {
    timeClick(time) {
      this.time = time;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
