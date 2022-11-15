const app = Vue.createApp({
  data() {
    return {
      name: 'Gerlie Reyes',
      age: 35,
      imagePath:
        'https://i.picsum.photos/id/195/200/200.jpg?hmac=XbxBxpgP4z7t-dGvrqGicWMyRkF_t0suZz3RqiOsY64',
    };
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    },
  },
});

app.mount('#assignment');
