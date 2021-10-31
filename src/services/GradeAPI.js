const GradeAPI = {
  data() {
    return {
      paid: "",
      higher: "",
      schoolsup: "",
      health: "",
      absences: "",
      failures: "",
      G1: "",
      G2: "",
    };
  },
  methods: {
    predictGrades: function () {
      console.log(
        JSON.stringify({
          paid: this.paid,
          higher: this.higher,
          schoolsup: this.schoolsup,
          health: this.health,
          absences: this.absences,
          failures: this.failures,
          G1: this.G1,
          G2: this.G2,
        })
      );
      fetch("http://127.0.0.1:5000/predictGrades", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paid: parseInt(this.paid),
          higher: parseInt(this.higher),
          schoolsup: parseInt(this.schoolsup),
          health: parseInt(this.health),
          absences: parseInt(this.absences),
          failures: parseInt(this.failures),
          G1: parseInt(this.G1),
          G2: parseInt(this.G2),
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          alert(result.result);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
};

export default new GradeAPI();
//Vue.createApp(GradeAPI).mount('#GradeAPI')
