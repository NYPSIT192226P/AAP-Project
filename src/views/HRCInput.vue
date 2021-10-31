<header>
  <script src="https://unpkg.com/vue@next"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
</header>

<template>
  <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
      <div class="row">
        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Total Students"
            type="gradient-info"
            sub-title="90"
            icon="ni ni-hat-3"
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
            title="Stressed Students"
            type="gradient-danger"
            sub-title="11"
            icon="fa fa-frown-open"
            class="mb-4 mb-xl-0"
          >
            <template v-slot:footer>
              <span class="text-success mr-2"
                ><i class="fa fa-arrow-down"></i> 20%</span
              >
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div>

        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Slightly Stressed "
            type="gradient-warning"
            sub-title="23"
            icon="fa fa-meh"
            class="mb-4 mb-xl-0"
          >
            <template v-slot:footer>
              <span class="text-danger mr-2"
                ><i class="fa fa-arrow-up"></i> 10%</span
              >
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div>
        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Normal Students"
            type="gradient-success"
            sub-title="56"
            icon="fa fa-grin"
            class="mb-4 mb-xl-0"
          >
            <template v-slot:footer>
              <span class="text-success mr-2"
                ><i class="fa fa-arrow-up"></i> 33%</span
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
            </div>
            <div class="col-4 text-right">
              <a href="#!" class="btn btn-sm btn-primary">Clear All</a>
            </div>
          </div>
        </div>
      </template>

      <div class="row">
        <div class="card-panel" id="HRC">
          <div class="row">
            <div class="input-field col s3">
              <input
                placeholder=""
                id="MEAN_RR"
                type="text"
                class="validate"
                v-model="MEAN_RR"
              />
              <label for="MEAN_RR" class="active">MEAN RR</label>
            </div>
            <div class="input-field col s3">
              <input
                placeholder=""
                id="MEDIAN_RR"
                type="text"
                class="validate"
                v-model="MEDIAN_RR"
              />
              <label for="MEDIAN_RR" class="active">MEDIAN RR</label>
            </div>
            <div class="input-field col s3">
              <input
                placeholder=""
                id="MEDIAN_REL_RR"
                type="text"
                class="validate"
                v-model="MEDIAN_REL_RR"
              />
              <label for="MEDIAN_REL_RR" class="active">MEDIAN REL RR</label>
            </div>
            <div class="input-field col s3">
              <input
                placeholder=""
                id="HR"
                type="text"
                class="validate"
                v-model="HR"
              />
              <label for="HR" class="active">HR</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s3">
              <input
                placeholder=""
                id="SDRR_RMSSD"
                type="text"
                class="validate"
                v-model="SDRR_RMSSD"
              />
              <label for="SDRR_RMSSD" class="active">SDRR RMSSD</label>
            </div>
            <div class="input-field col s3">
              <input
                placeholder=""
                id="SDRR_RMSSD_REL_RR"
                type="text"
                class="validate"
                v-model="SDRR_RMSSD_REL_RR"
              />
              <label for="SDRR_RMSSD_REL_RR" class="active"
                >SDRR RMSSD REL RR</label
              >
            </div>
            <div class="input-field col s3">
              <input
                placeholder=""
                id="TP"
                type="text"
                class="validate"
                v-model="TP"
              />
              <label for="TP" class="active">TP</label>
            </div>
            <div class="input-field col s3">
              <input
                placeholder=""
                id="SD2"
                type="text"
                class="validate"
                v-model="SD2"
              />
              <label for="SD2" class="active">SD2</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s3">
              <input
                placeholder=""
                id="RMSSD"
                type="text"
                class="validate"
                v-model="RMSSD"
              />
              <label for="RMSSD" class="active">RMSSD</label>
            </div>
            <div class="input-field col s3">
              <input
                placeholder=""
                id="SDRR"
                type="text"
                class="validate"
                v-model="SDRR"
              />
              <label for="SDRR" class="active">SDRR</label>
            </div>
            <div class="input-field col s3">
              <input
                placeholder=""
                id="pNN25"
                type="text"
                class="validate"
                v-model="pNN25"
              />
              <label for="pNN25" class="active">pNN25</label>
            </div>
            <div class="input-field col s3">
              <input
                placeholder=""
                id="LF_HF"
                type="text"
                class="validate"
                v-model="LF_HF"
              />
              <label for="LF_HF" class="active">LF HF</label>
            </div>
          </div>
          <div class="row">
            <a
              class="btn btn-info col-lg-2"
              style="margin: 15px"
              v-on:click="classifyHeartRate"
            >
              Predict
            </a>
          </div>
          {{ Result }}
        </div>
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
      MEAN_RR: "",
      MEDIAN_RR: "",
      MEDIAN_REL_RR: "",
      HR: "",
      SDRR_RMSSD: "",
      SDRR_RMSSD_REL_RR: "",
      TP: "",
      SD2: "",
      RMSSD: "",
      SDRR: "",
      pNN25: "",
      LF_HF: "",
      Result: "",
    };
  },
  methods: {
    classifyHeartRate: function () {
      console.log(
        JSON.stringify({
          MEAN_RR: this.MEAN_RR,
          MEDIAN_RR: this.MEDIAN_RR,
          MEDIAN_REL_RR: this.MEDIAN_REL_RR,
          HR: this.HR,
          SDRR_RMSSD: this.SDRR_RMSSD,
          SDRR_RMSSD_REL_RR: this.SDRR_RMSSD_REL_RR,
          TP: this.TP,
          SD2: this.SD2,
          RMSSD: this.RMSSD,
          SDRR: this.SDRR,
          pNN25: this.pNN25,
          LF_HF: this.LF_HF,
        })
      );
      fetch("http://127.0.0.1:5000/classifyHeartRate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          MEAN_RR: parseInt(this.MEAN_RR),
          MEDIAN_RR: parseInt(this.MEDIAN_RR),
          MEDIAN_REL_RR: parseInt(this.MEDIAN_REL_RR),
          HR: parseInt(this.HR),
          SDRR_RMSSD: parseInt(this.SDRR_RMSSD),
          SDRR_RMSSD_REL_RR: parseInt(this.SDRR_RMSSD_REL_RR),
          TP: parseInt(this.TP),
          SD2: parseInt(this.SD2),
          RMSSD: parseInt(this.RMSSD),
          SDRR: parseInt(this.SDRR),
          pNN25: parseInt(this.pNN25),
          LF_HF: parseInt(this.LF_HF),
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          //alert(result.result);
          /*if (result.result = "Condition_amusement"){
              this.Result = "Excited"
            } 
            if (result.result = "Condition_baseline") {
              this.Result = "Normal"
            } 
            if (result.result = "Condition_stress") {
              this.Result = "Stress"
            }*/
          this.Result = result.result;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
};
</script>
