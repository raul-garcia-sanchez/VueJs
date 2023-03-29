const app = Vue.createApp({
  data() {
    return {
      name: "Raúl",
      inputValue: "",
      inputValue2: "",
    };
  },
  methods: {
    showAlert() {
      alert(`Estas probando el código de ${this.name}!`);
    },
    onKeyDown(event) {
      this.inputValue = event.target.value;
    },
    onKeyPress(event) {
      if (event.key === "Enter") {
        this.inputValue2 = event.target.value;
      }
    },
  },
});

app.mount("#assignment");
