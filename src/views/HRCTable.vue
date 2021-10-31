<template>

  <div>
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

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col">
          <projects-table title="IT1901 - Students"></projects-table>
        </div>
      </div>
      <router-link to="/HRCInput" tag="button">
        <base-button type="primary" size="md">Input Student Data</base-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import ProjectsTable from "./Tables/HRCProjectTable";
export default {
  name: "tables",
  components: {
    ProjectsTable,
  },
};
</script>

<style></style>
