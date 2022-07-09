import msg from './msg.js';

Vue.createApp({
  data() {
    return {
      message: msg,
      count: 0
    }
  }
}).mount('#app')
