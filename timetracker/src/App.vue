<template>
  <div class="appContainer">
    <Sidebar />
    <p class="madewith">
      made with <a href="https://vuejs.org" class="green">vue.js</a>
    </p>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";

export default {
  name: "App",
  components: {
    Sidebar,
  },
};
</script>
// all styling gjøres i App(root) component // laster inn et eget stylesheet for
mobil // for å holde de seperat.
<style>
@import "./mobilestyle.css";

body {
  margin: 0;
  padding: 0;
  font-family: "Rubik";
  background-color: hsl(226, 43%, 10%);
  color: white;
}
.appContainer {
  display: grid;
  grid-template-columns: repeat(4, 255px);
  grid-template-rows: repeat(2, 1fr);
  gap: 25px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.madewith {
  position: absolute;
  bottom: -70px;
  left: 50%;
  transform: translate(-50%);
  font-family: "Dosis";
  font-size: 20px;
  padding: 20px;
  margin-top: 10px;
}
.green {
  color: rgb(55, 238, 55);
  text-decoration: none;
}
.sidebarContainer {
  height: 350px;
  width: 255px;
  position: absolute;
  background-color: hsl(246, 80%, 60%);
  z-index: -10;
  border-radius: 15px;
}
.profilepic {
  height: 80px;
  z-index: 2;
  padding: 40px;
}
.picBorder {
  background-color: white;
  height: 85px;
  width: 85px;
  position: absolute;
  border-radius: 50%;
  top: 37px;
  left: 37px;
  z-index: -5;
}
.sidebarTitle {
  margin-top: -20px;
  padding-left: 40px;
}
.navbar {
  position: relative;
  height: 500px;
  grid-row: span 2;
  background-color: hsl(235, 46%, 20%);
  z-index: -20;
  border-radius: 15px;
}
.smallTxt {
  font-family: "Rubik";
  color: hsl(236, 100%, 87%);
  font-weight: 400;
}
.profileName {
  margin-top: -15px;
  font-weight: 300;
  font-size: 40px;
}
.links {
  position: absolute;
  bottom: 20px;
}
.timeToggle {
  display: block;
  background: none;
  color: hsl(236, 100%, 87%);
  border: none;
  margin-bottom: 10px;
  margin-left: 35px;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}
.timeToggle:hover {
  color: white;
}
.highlight {
  color: white;
}
.cardContainer {
  position: relative;
  border-radius: 15px;
  z-index: -10;
}
.cardTxtBox {
  border-radius: 15px;
  background-color: hsl(235, 46%, 20%);
  position: absolute;
  bottom: -1px;
  left: -1px;
  width: 257px;
  height: 190px;
}
.categoryIcon {
  position: absolute;
  right: 20px;
  top: 0;
}
.cardTxtBox:hover {
  background-color: hsl(236, 45%, 30%);
  cursor: pointer;
}
.elipse {
  position: absolute;
  right: 40px;
  top: 40px;
}
.cardTitle {
  font-size: 18px;
  margin-left: 30px;
  margin-top: 30px;
}
.current {
  margin-top: 0px;
  margin-left: 30px;
  margin-bottom: -20px;
  font-weight: 300;
  font-size: 60px;
}
.previous {
  font-size: 16px;
  margin-left: 30px;
  color: hsl(236, 100%, 87%);
}

@media only screen and (max-width: 600px) {
  .appContainer {
    margin-top: 0px;
    grid-template-columns: repeat(1, 350px);
    grid-template-rows: repeat(8, 1fr);
    top: 0;
    left: 50%;
    margin-top: 20px;
    transform: translate(-50%);
  }
  .sidebarContainer {
    width: 350px;
  }
}
</style>
