<template>
  <div>
    <span class="count">{{ count }}</span>
    <button class="add-btn" @click="increment">Increment</button>
    <button class="sub-btn" @click="decrement">Decrement</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
};
</script>
