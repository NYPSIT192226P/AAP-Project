<template>
  <div class="card shadow" :class="type === 'dark' ? 'bg-default' : ''">
    <div
      class="card-header border-0"
      :class="type === 'dark' ? 'bg-transparent' : ''"
    >
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white' : ''">
            {{ title }}
          </h3>
        </div>
        <div class="col text-right">
            <base-button type="primary" size="sm" @click="update">Refresh <i class="fas fa-sync-alt"></i></base-button>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table
        class="table align-items-center table-flush"
        :class="type === 'dark' ? 'table-dark' : ''"
        :thead-classes="type === 'dark' ? 'thead-dark' : 'thead-light'"
        tbody-classes="list"
        :data="tableData"
      >
        <template v-slot:columns>
          <th>Student</th>
          <th>Status</th>
          <th>Current Grade</th>
          <th>Predicted Grade</th>
          <th>Stress Level</th>
          <th></th>
        </template>

        <template v-slot:default="row">
          <th scope="row" :style="row.item.colorz"><!--border-left: 10px solid red;-->
            <div class="media align-items-center">
              <a href="#" class="avatar rounded-circle mr-3">
                <img alt="Image placeholder" :src="row.item.img" />
              </a>
              <div class="media-body">
                <span class="name mb-0 text-sm">{{ row.item.title }}</span>
              </div>
            </div>
          </th>
          <td>
            <badge class="badge-dot mr-4" :type="row.item.statusType">
              <i :class="`bg-${row.item.statusType}`"></i>
              <span class="status">{{ row.item.status }}</span>
            </badge>
          </td>
          <td class="budget">
            {{ row.item.passFail }}
          </td>
          <td>
          
            <i
              class="fas fa-arrow-up text-success mr-3"
              :class="
                row.item.bounceRateDirection === 'up'
                  ? 'text-success'
                  : 'text-danger'
              "
            >
            </i>
            {{ row.item.grade }}
          </td>

          <td>
            <div class="d-flex align-items-center">
              <span class="completion mr-2">{{ row.item.completion }}%</span>
              <div>
                <base-progress
                  :type="row.item.statusType"
                  :show-percentage="false"
                  class="pt-0"
                  :value="row.item.completion"
                />
              </div>
            </div>
          </td>

          <td class="text-right">
            <base-dropdown class="dropdown" position="right">
              <template v-slot:title>
                <a
                  class="btn btn-sm btn-icon-only text-light"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fas fa-ellipsis-v"></i>
                </a>
              </template>

              <template>
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </template>
            </base-dropdown>
          </td>
        </template>
      </base-table>
    </div>

    <div
      class="card-footer d-flex justify-content-end"
      :class="type === 'dark' ? 'bg-transparent' : ''"
    >
      <base-pagination total="30"></base-pagination>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'

const gradeArray = [];
const finalStressArray = [];
var stressedStatus = 0
var ssStatus = 0

var studentArray = {
  "Jia_Sheng": [1, 0, 1, 7, 0, 0, 11, 12],
  "Doris_Wong": [0, 1, 0, 8, 2, 0, 17, 13],
  "Lau_Lok_Nam": [1, 0, 0, 6, 3, 0, 19, 3],
  "Celine_Lam": [0, 0, 0, 3, 7, 3, 5, 9],
  "Sarah_Shen": [1, 1, 1, 9, 0, 0, 20, 0]
};
    

var stressArray = {
  "Jia_Sheng": ["sad", "no stress", 11, "normal"],
  "Doris_Wong": ["disgust", "stress", 12, "excited"],
  "Lau_Lok_Nam": ["sad", "stress", 0, "stressed"],
  "Celine_Lam": ["happy", "no stress", 18, "excited"],
  "Sarah_Shen": ["happy", "no stress", 40, "normal"]
};

var studentName = []
for (var key in studentArray){
  key = key.replaceAll("_"," ")
  studentName.push(key)
}                  
console.log[studentName[0]]

export default {
  name: "projects-table",
  setup () {
    const update = () => {
        createToast({
          title: '',
          description: 'Please take note!'
        },
        {
          position: 'top-center',
          swipeClose: 'true',
          showIcon: 'true',
          type: 'danger',
          transition: 'slide'
        })
    }
    return { update }
  },
  props: {
    type: {
      type: String,
    },
    title: String,
  },
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
      expression: "",
      posture: "",
      grades: "",
      heartrate: "",
      tableData: [
        {
          img: "img/theme/Student 1.jpg",
          title: studentName[0],
          passFail: studentArray.Jia_Sheng[7],
          grade: "",
          bounceRateDirection: "",
          status: "",
          statusType: "",
          completion: 0,
          colorz: "",
        },
        {
          img: "img/theme/Student 2.jpg",
          title: studentName[1],
          passFail: studentArray.Doris_Wong[7],
          grade: "",
          bounceRateDirection: "",
          status: "",
          statusType: "",
          completion: 0,
        },
        {
          img: "img/theme/Student 3.jpg",
          title: studentName[2],
          passFail: studentArray.Lau_Lok_Nam[7],
          grade: "",
          bounceRateDirection: "",
          status: "",
          statusType: "",
          completion: 0,
        },
        {
          img: "img/theme/Student 4.jpg",
          title: studentName[3],
          passFail: studentArray.Celine_Lam[7],
          grade: "",
          bounceRateDirection: "",
          status: "",
          statusType: "",
          completion: 0,
        },
        {
          img: "img/theme/Student 5.jpg",
          title: studentName[4],
          passFail: studentArray.Sarah_Shen[7],
          grade: "",
          bounceRateDirection: "",
          status: "",
          statusType: "",
          completion: 0,
        },
      ],
    };
  },
  methods: {
    predictGrades: function (p, hi, ss, he, a, f, G1, G2) {
      fetch("http://it3100-192466b-aapwebserver.southeastasia.azurecontainer.io/predictGrades", { //http://it3100-192466b-aapwebserver.southeastasia.azurecontainer.io/predictGrades
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paid: parseInt(p),
          higher: parseInt(hi),
          schoolsup: parseInt(ss),
          health: parseInt(he),
          absences: parseInt(a),
          failures: parseInt(f),
          G1: parseInt(G1),
          G2: parseInt(G2),
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result.result)
          gradeArray.push(result.result)
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
    predictStress: function (e, po, gr, hr) {
      fetch('http://it3100-192466b-aapwebserver.southeastasia.azurecontainer.io/predictStress', {//http://it3100-192466b-aapwebserver.southeastasia.azurecontainer.io/predictStress
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          expression: parseInt(e),
          posture: parseInt(po),
          grades: parseInt(gr),
          heartrate: parseInt(hr),
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result.result)
          finalStressArray.push(result.result)
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
  beforeMount(){
    if (gradeArray[0] == undefined){
      console.log("This array is undefined")
    }
    for ( var key in studentArray ){
      console.log(studentArray[key][0])
      this.predictGrades(studentArray[key][0], studentArray[key][1], studentArray[key][2], studentArray[key][3], studentArray[key][4], studentArray[key][5], studentArray[key][6], studentArray[key][7])
    }
    
    for ( var key in stressArray ){
      console.log(stressArray[key][0])
      this.predictStress(stressArray[key][0], stressArray[key][1], stressArray[key][2], stressArray[key][3])
    }

    setTimeout(() => {
        console.log(gradeArray[5])
        var counter = 0
        gradeArray.forEach((grad) => {
          console.log(grad)
          if (counter < this.tableData.length) this.tableData[counter].grade = grad
          if (counter < this.tableData.length && grad > this.tableData[counter].passFail) this.tableData[counter].bounceRateDirection = "up"
          counter += 1
        })

        console.log(finalStressArray)
        console.log(studentArray[0])

        var counter2 = 0
        finalStressArray.forEach((scheck) => {
          console.log(scheck)
          if (counter2 < this.tableData.length) this.tableData[counter2].status = scheck

          if (counter2 < this.tableData.length && scheck == "stressed") 
            this.tableData[counter2].statusType = "danger",
              createToast({
                title: studentName[counter2] + " is " + scheck,
                description: 'Please take note!'
              },
              {
                position: 'top-center',
                swipeClose: 'true',
                showIcon: 'true',
                appendToast: true,
                //toastBackgroundColor: 'orange'
                type: 'danger',
                transition: 'slide'
              }),
              this.tableData[counter2].colorz = "border-left: 10px solid red",
              this.tableData[counter2].completion = 80,
              //this.tableData.unshift(this.tableData[counter2]),
             // this.tableData.pop(this.tableData[counter2]),
            stressedStatus = stressedStatus + 1

          if (counter2 < this.tableData.length && scheck == "slightly stressed") 
            this.tableData[counter2].statusType = "warning",
            createToast({
              title: studentName[counter2] + " is " + scheck,
              description: 'Please take note!'
            },
            {
              position: 'top-right',
              swipeClose: 'true',
              showIcon: 'true',
              //toastBackgroundColor: 'orange'
              type: 'warning',
              transition: 'slide'
            }),
            this.tableData[counter2].colorz = "border-left: 10px solid orange",
            this.tableData[counter2].completion = 50,
            ssStatus = ssStatus + 1

          if (counter2 < this.tableData.length && scheck == "normal") 
            this.tableData[counter2].statusType = "success",
            this.tableData[counter2].colorz = "border-left: 10px solid #00D93D",
            this.tableData[counter2].completion = 20
           // this.tableData.shift(this.tableData[counter2]),
           // this.tableData.pop(this.tableData[counter2]),
          counter2 += 1
        })
    },2000);
  },
};
setTimeout(() => {
  console.log(ssStatus)
  console.log(stressedStatus)
}, 4000)
</script>



<style>
.stuff{
  background: blue;
}

</style>
