<script>
export default {
  props: {},
  components: {},
};
</script>

<template>
  <div class="sidebar">
    <v-item-group mandatory>
      <v-container class="mr-9 ml-1">
        <v-row>
          <v-col cols="12" md="5">
            <v-card class="d-flex align-center pl-4 left-item" height="100">
              <div class="icon pa-4">
                <i class="fas fa-medkit i-icon"></i>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" md="5">
            <v-card class="d-flex align-center pl-4 left-item" height="100">
              <div class="icon pa-4">
                <i class="fas fa-stethoscope i-icon"></i>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" md="5">
            <v-card class="d-flex align-center pl-4 left-item" height="100">
              <div class="icon pa-4">
                <i class="fas fa-heartbeat i-icon"></i>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" md="5">
            <v-card class="d-flex align-center pl-4 left-item" height="100">
              <div class="icon pa-4">
                <i class="fas fa-hospital i-icon"></i>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </div>
</template>

<style>

</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);
  float: right;
  position: fixed;
  width: 300px;
  border-radius: 20px;
  height: auto;
  top: 0;
  left: 1000px;
  bottom: 0;
  padding: 0.5em;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
}
.sidebar h1 {
  height: 2.5em;
}
.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;
  color: rgba(255, 255, 255, 0.7);
  transition: 0.2s linear;
}
.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
.left-item {
  background-color: rgb(68, 184, 176);
}

.icon .i-icon {
  font-size: 30px;
}
</style>
