<header>
  <script src="https://unpkg.com/vue@next"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
</header>

<template>

  <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
      <!-- Card stats -->
      <div class="row">
        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Total traffic"
            type="gradient-red"
            sub-title="350,897"
            icon="ni ni-active-40"
            class="mb-4 mb-xl-0"
          >
            <template v-slot:footer>
              <span class="text-success mr-2"
                ><i class="fa fa-arrow-up"></i> 3.48%</span
              >
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div>
        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Total traffic"
            type="gradient-orange"
            sub-title="2,356"
            icon="ni ni-chart-pie-35"
            class="mb-4 mb-xl-0"
          >
            <template v-slot:footer>
              <span class="text-success mr-2"
                ><i class="fa fa-arrow-up"></i> 12.18%</span
              >
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div>
        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Sales"
            type="gradient-green"
            sub-title="924"
            icon="ni ni-money-coins"
            class="mb-4 mb-xl-0"
          >
            <template v-slot:footer>
              <span class="text-danger mr-2"
                ><i class="fa fa-arrow-down"></i> 5.72%</span
              >
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div>
        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Performance"
            type="gradient-info"
            sub-title="49,65%"
            icon="ni ni-chart-bar-32"
            class="mb-4 mb-xl-0"
          >
            <template v-slot:footer>
              <span class="text-success mr-2"
                ><i class="fa fa-arrow-up"></i> 54.8%</span
              >
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div>
      </div>
    </base-header>

  <div id="home" style="padding: 80px" class="container-fluid mt--7">
    <card shadow type="secondary">

      <template v-slot:header>
        <div class="bg-white border-0">
          <div class="row align-items-center">
            <div class="col-8">
              <h3 class="mb-0">Student Details</h3>
             <!-- <h3 id="grade" class="mb-0"></h3>-->
            </div>
            <div class="col-4 text-right">
              <a href="#!" class="btn btn-sm btn-primary">Clear All</a>
            </div>
          </div>
        </div>
      </template>

      <div class="row">
        <div class="col-lg-6">
          <input
            label="Paid - Attends External Tuition"
            input-classes="form-control-alternative"
            placeholder="0 - 1"
            id="paid"
            type="text"
            v-model="paid"
          />
        </div>
        <div class="col-lg-6">
          <input
            label="Higher"
            input-classes="form-control-alternative"
            placeholder="0 - 1"
            id="higher"
            type="text"
            v-model="higher"
          />
        </div>
        <div class="col-lg-6">
          <input
            label="SchoolSupp"
            input-classes="form-control-alternative"
            placeholder="0 - 1"
            id="schoolsup"
            type="text"
            v-model="schoolsup"
          />
        </div>
        <div class="col-lg-6">
          <input
            label="Health"
            input-classes="form-control-alternative"
            placeholder="0 - 10"
            id="health"
            type="text"
            v-model="health"
          />
        </div>
        <div class="col-lg-6">
          <input
            label="Absences"
            input-classes="form-control-alternative"
            placeholder=""
            id="absences"
            type="text"
            v-model="absences"
          />
        </div>
        <div class="col-lg-6">
          <input
            label="Failures"
            input-classes="form-control-alternative"
            placeholder=""
            id="failures"
            type="text"
            v-model="failures"
          />
        </div>
        <div class="col-lg-6">
          <input
            label="Grade 1"
            input-classes="form-control-alternative"
            placeholder=" 0 - 20"
            id="G1"
            type="text"
            v-model="G1"
          />
        </div>
        <div class="col-lg-6">
          <input
            label="Grade 2"
            input-classes="form-control-alternative" 
            placeholder=" 0 - 20"
            id="G2"
            type="text"
            v-model="G2"
          />
        </div>
      </div>
      <div class="row">
        <a class="btn btn-info col-lg-2" style="margin:15px" v-on:click="predictGrades">
          Predict
        </a>
      </div>
    </card>
  </div>
</template>

<script>
//import GradeAPI from "../services/GradeAPI.js";
export default {
  name: "GradeAPI",
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
      fetch("http://127.0.0.1:8000/predictGrades", {
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
          /*paid: parseInt(0),
          higher: parseInt(0),
          schoolsup: parseInt(1),
          health: parseInt(5),
          absences: parseInt(4),
          failures: parseInt(3),
          G1: parseInt(5),
          G2: parseInt(12),*/
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          alert(result.result);
          //document.getElementById("grade").innerHTML = result.result;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
  /*beforeMount(){
    	this.predictGrades()
    }*/
};
</script>
