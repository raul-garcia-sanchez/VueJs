const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      messageInfo: "",
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
      if (this.counter < 37) {
        this.messageInfo = "Not there yet";
      } else if (this.counter > 37) {
        this.messageInfo = "Too much!";
      }
    },
  },
  watch: {
    counter() {
      setTimeout(() => {
        this.counter = 0;
        this.messageInfo = "Not there yet";
      }, 5000);
    },
  },
});

app.mount("#assignment");
