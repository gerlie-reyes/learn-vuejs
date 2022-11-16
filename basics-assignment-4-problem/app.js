const app = Vue.createApp({
  data() {
    return {
      pClass: '',
      showParagraph: true,
      bgColorInput: '',
    };
  },
  computed: {
    pClasses() {
      return {
        user1: this.pClass === 'user1',
        user2: this.pClass === 'user2',
        visible: this.showParagraph,
        hidden: !this.showParagraph,
      };
    },
  },
  methods: {
    toggleParagraph() {
      this.showParagraph = !this.showParagraph;
    },
  },
});

app.mount('#assignment');
