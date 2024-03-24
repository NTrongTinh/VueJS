<template>
    <div>
      <div v-for="item in size" :key="item.id">
        <input
          type="radio"
          name="size"
          autocomplete="off"
          :value="item.id"
          v-model="selectedSize"
        />
        <label>{{ item.name }}</label>
      </div>
      <p>Size được chọn: {{ selectedSize }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        size: [
          { id: 1, name: 'Small' },
          { id: 2, name: 'Medium' },
          { id: 3, name: 'Large' }
        ],
        selectedSize: null
      };
    }
  };
  </script>
  