<template>
  <div class="title-link">
    Index
    <a-divider type="vertical"></a-divider>
    <a href="store.html">Hello</a>
  </div>
  <div class="store-demo">
    <p>store.state.count: {{ $store.state.count }}</p>
    <a-button type="primary" @click="increment" :style="{ marginRight: '20px', marginBottom: '20px' }">Count ++</a-button>
    <a-button type="default" @click="$store.commit('clear')">Clear</a-button>
  </div>
</template>

<script>
import { message } from 'ant-design-vue';
export default {
  methods: {
    increment() {
      if (this.$store.state.count >= 9) {
        message.info('this is a demo');
        return false;
      }
      this.$store.commit('increment');
    },
  },
};
</script>
