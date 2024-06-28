<template>
  <div class="relative" @click="toggleDropdown">
    <div class="cursor-pointer px-4 py-2 border border-gray-300 rounded">
      {{ selected['label'] || props.title }}
      <span class="absolute right-2 top-3">
        <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M5.293 7.293L9 10.586l3.707-3.293 1.414 1.414L9 13.414 3.879 8.707z"/>
        </svg>
      </span>
    </div>
    <div v-show="isOpen" class="dropdown-content absolute w-full mt-1 bg-white border border-gray-300 rounded shadow">
      <ul>
        <li v-for="option in options" :key="option.id" class="px-4 py-2 hover:bg-gray-100" @click="selectOption($event, option)">
          {{ option.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue'

const { emit } = getCurrentInstance()
const props = defineProps({
  options: {
    type: Array,
    required: true
  },
  title: {
    type: String,
    default: 'Select option'
  }
})

const selected = ref('')
const isOpen = ref(false)

function toggleDropdown() {
  isOpen.value = !isOpen.value
}

function selectOption(event, option) {
  event.stopPropagation()
  selected.value = option
  isOpen.value = false
  emit('selection-changed', selected.value)
}
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  cursor: pointer;
}

.dropdown-content {
  max-height: 200px;
  overflow-y: auto;
}
</style>
