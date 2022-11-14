<script>
import Card from "../components/Card.vue";
import Sidebar from "../components/Sidebar/Sidebar.vue";

export default {
  components: {
    Card,
    Sidebar
},
  data: () => ({
    alignments: ["start", "center", "end"],
  }),
};
</script>

<template>
  
  <!-- <div className="justify-lg-center">
    <div className="heading top__heading">
      <h3>Discovers</h3>
    </div>
    <div className="home__boxx">
    </div>
  </div> -->
</template>
<style scoped>
.home {
  flex: 2;
  overflow-y: scroll;
  background: #dfe1e8;
  height: 100vh;
}

.home::-webkit-scrollbar {
  display: none;
  width: 100%;
}

.home__box,
.home__boxx {
  display: flex;
  align-items: center;
  gap: 20px;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  height: 350px;
  overflow-y: hidden;
  margin: 0 20px;
}

.tes {
  background-color: #000;
}

.home__boxx {
  height: 250px;
}

.home__box::-webkit-scrollbar,
.home__boxx::-webkit-scrollbar {
  display: none;
}

.home .heading {
  padding-left: 20px;
  font-size: 18px;
  color: var(--four-color);
  margin: 20px 0;
  position: relative;
}

.home .heading::before {
  /* content: ""; */
  position: absolute;
  top: 0;
  left: 8px;
  background: var(--second-color);
  width: 3px;
  height: 100%;
}
</style>
