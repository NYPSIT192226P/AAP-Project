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
            <base-button type="primary" size="sm">See all</base-button>
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
          <th>Pass/Fail</th>
          <th>Status</th>
          <th>Current Grade</th>
          <th>Stress Level</th>
          <th></th>
        </template>

        <template v-slot:default="row">
          <th scope="row">
            <div class="media align-items-center">
              <a href="#" class="avatar rounded-circle mr-3">
                <img alt="Image placeholder" :src="row.item.img" />
              </a>
              <div class="media-body">
                <span class="name mb-0 text-sm">{{ row.item.title }}</span>
              </div>
            </div>
          </th>
          <td class="budget">
            {{ row.item.passFail }}
          </td>
          <td>
            <badge class="badge-dot mr-4" :type="row.item.statusType">
              <i :class="`bg-${row.item.statusType}`"></i>
              <span class="status">{{ row.item.status }}</span>
            </badge>
          </td>
          <td>
            <div class="">
            <td>
            <i
              class="far fa-thumbs-up text-success mr-3"
              :class="
                row.item.bounceRateDirection === 'up'
                  ? 'text-success'
                  : 'text-danger'
              "
            >
            </i>
            {{ row.item.grade }}
          </td>
            </div>
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
export default {
  name: "projects-table",
  props: {
    type: {
      type: String,
    },
    title: String,
  },
  data() {
    return {
      tableData: [
        {
          img: "img/theme/Student 1.jpg",
          title: "Jia Sheng",
          passFail: "Pass",
          grade: "20",
          status: "slightly stressed",
          statusType: "warning",
          completion: 52,
        },
        {
          img: "img/theme/Student 2.jpg",
          title: "Doris Wong",
          passFail: "Pass",
          status: "not stressed",
          statusType: "success",
          completion: 15,
        },
        {
          img: "img/theme/Student 3.jpg",
          title: "Lau Lok Nam",
          passFail: "Pass",
          status: "slightly stressed",
          statusType: "warning",
          completion: 65,
        },
        {
          img: "img/theme/Student 4.jpg",
          title: "Celine Lam",
          passFail: "Fail",
          status: "very stressed",
          statusType: "danger",
          completion: 90,
        },
        {
          img: "img/theme/Student 5.jpg",
          title: "Sarah Shen",
          passFail: "Pass",
          status: "normal",
          statusType: "info",
          completion: 40,
        },
      ],
    };
  },
};
</script>
<style></style>
