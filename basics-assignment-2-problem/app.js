const app = Vue.createApp({
  data() {
    return {
      firstInput: 'OUTPUT',
      finalInput: 'OUTPUT',
    };
  },
  methods: {
    showAlert() {
      alert('Welcome to VueJS');
    },
    saveFirstInputValue(event) {
      this.firstInput = event.target.value;
    },
    saveFinalInputValue(event) {
      this.finalInput = this.firstInput;
    },
  },
});

app.mount('#assignment');
