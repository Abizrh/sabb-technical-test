<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { collapsed } from './state'
export default {
  data(){
    return{
      mobileView: true
    }
  },
  props: {
    to: { type: String, required: true },
    icon: { type: String, required: true },
    mobile: {type: Boolean}
  },
  setup(props) {
    const route = useRoute()
    const isActive = computed(() => route.path === props.to)
    return { isActive, collapsed }
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 848;
    },
  },

  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },
}
</script>

<template>
  <router-link :to="to" class="link" :class="{ active: isActive }">
    <i class="icon" :class="icon" v-if="!mobileView" />
    <i class="bottom-icon" :class="icon" v-if="mobileView" />
    <transition name="fade">
      <span v-if="!collapsed">
        <slot />
      </span>
    </transition>
  </router-link>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.link {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  font-weight: 400;
  user-select: none;
  margin: 0.1em 0;
  padding: 0.4em;
  border-radius: 0.25em;
  height: 1.5em;
  color: rgb(0, 0, 0);
  padding-top: 30px;
  text-decoration: none;
  margin: 5px;
  padding-bottom: 30px;
}
.link:hover {
  background-color: var(--sidebar-item-hover);
}
.link.active {
  background-color: var(--sidebar-item-active);
  padding-top: 30px;
}
.link .icon {
  flex-shrink: 0;
  width: 25px;
  margin-right: 10px;
}

@media only screen and (max-width: 848px) {
  .link .bottom-icon {
    color: black;
    font-size: 30px;
    margin-bottom: 25px;
  }
}
</style>