const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  computed: {
    result() {
      if (this.counter < 37) {
        return 'Not there yet';
      } else if (this.counter > 37) {
        return 'Too much!';
      } else {
        return this.counter;
      }
    },
  },
  watch: {
    result() {
      setTimeout(() => {
        this.counter = 0;
      }, 5000);
    },
  },
  methods: {
    add(num) {
      this.counter += num;
    },
  },
});

app.mount('#assignment');
