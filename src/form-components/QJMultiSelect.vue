<template>
  <div class="relative" @click="toggleDropdown">
    <div class="cursor-pointer px-4 py-2 border border-gray-300 rounded">
      {{ selected.length > 0 ? `${selected.length} ${props.itemLabel}`  : props.title }}
      <span class="absolute right-2 top-3">
        <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M5.293 7.293L9 10.586l3.707-3.293 1.414 1.414L9 13.414 3.879 8.707z"/>
        </svg>
      </span>
    </div>
    <div v-show="isOpen" class="dropdown-content absolute w-full mt-1 bg-white border border-gray-300 rounded shadow" @mouseleave="closeDropdown">
      <ul>
        <li v-for="option in options" :key="option.id" class="px-4 py-2 hover:bg-gray-100" @click="selectOption($event, option)">
          <span v-if="selected.includes(option)">✔</span> {{ option.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import {onMounted, onUnmounted, ref, getCurrentInstance} from 'vue'

const { emit } = getCurrentInstance()
const props = defineProps({
  options: {
    type: Array,
    required: true
  },
  title: {
    type: String,
    default: 'Select option'
  },
  itemLabel: {
    type: String,
    default: 'items'
  }
})

const selected = ref([])
const lastSelected = ref(null)
const isOpen = ref(false)

function toggleDropdown() {
  isOpen.value = !isOpen.value
}

function closeDropdown() {
  isOpen.value = false
}

function selectOption(event, option) {
  const index = selected.value.findIndex(selectedOption => selectedOption.id === option.id);
  if (event.shiftKey && lastSelected.value !== null) {
    const start = props.options.findIndex(selectedOption => selectedOption.id === lastSelected.value.id);
    const end = props.options.findIndex(selectedOption => selectedOption.id === option.id);
    const itemsToSelect = props.options.slice(Math.min(start, end), Math.max(start, end) + 1);
    selected.value = [...itemsToSelect]; // Clear the selected array before adding the range of options
  } else {
    if (index < 0) {
      selected.value.push(option);
    } else {
      selected.value.splice(index, 1);
    }
  }
  lastSelected.value = option;
  isOpen.value = false;
  emit('selection-changed', selected.value);
}

let preventDefaultOnShiftMouseDown

onMounted(() => {
  preventDefaultOnShiftMouseDown = (event) => {
    if (event.shiftKey) {
      event.preventDefault()
    }
  }
  window.addEventListener('mousedown', preventDefaultOnShiftMouseDown)
})

onUnmounted(() => {
  window.removeEventListener('mousedown', preventDefaultOnShiftMouseDown)
})

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
