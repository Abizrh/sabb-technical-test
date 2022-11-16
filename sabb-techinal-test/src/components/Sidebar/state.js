import { ref, computed } from 'vue'

export const collapsed = ref(false) || false
export const toggleSidebar = () => (collapsed.value = !collapsed.value)

export const SIDEBAR_WIDTH = 199
export const SIDEBAR_WIDTH_COLLAPSED = 70
export const sidebarWidth = computed(
  () => `${collapsed.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px`
)