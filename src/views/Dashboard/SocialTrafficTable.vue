<template>
  <div class="card">
    <div class="card-header border-0">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0">Class Status</h3>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table thead-classes="thead-light" :data="tableData">
        <template v-slot:columns>
          <th>Class</th>
          <th>Stress Level</th>
          <th></th>
        </template>

        <template v-slot:default="row">
          <th scope="row">
            {{ row.item.class }}
          </th>
         
          <td>
            <div class="d-flex align-items-center">
              <span class="mr-2">{{ row.item.progress }}%</span>
              <base-progress
                :type="row.item.progressType"
                class="pt-0"
                :show-percentage="false"
                :value="row.item.progress"
              />
            </div>
          </td>
        </template>
      </base-table>
    </div>
  </div>
</template>
<script>
export default {
  name: "social-traffic-table",
  data() {
    return {
      tableData: [
        {
          class: "1901",
          progress: 60,
          progressType: "gradient-danger",
        },
        {
          class: "1902",
       
          progress: 70,
          progressType: "gradient-success",
        },
        {
          class: "1903",
         
          progress: 80,
          progressType: "gradient-primary",
        },
        {
          class: "1904",
         
          progress: 75,
          progressType: "gradient-info",
        },
        {
          class: "1905",
         
          progress: 30,
          progressType: "gradient-warning",
        },
      ],
    };
  },
};
</script>
<style></style>
