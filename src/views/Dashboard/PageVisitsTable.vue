<template>
  <div class="card" id="warning_card">
    <div class="card-header border-0">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0">Stress students</h3>
        </div>
        <div class="col text-right">
        <router-link to="/GradePredictor" tag="button">
          <a class="btn btn-sm btn-primary">See all</a>
        </router-link>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table thead-classes="thead-light" :data="tableData">
        <template v-slot:columns>
          <th>Students name</th>
          <th>class</th>
          <th>Stress status</th>
        </template>

        <template v-slot:default="row">
          <th scope="row">
            {{ row.item.Studentname }}
          </th>
          <td>
            {{ row.item.class }}
          </td>
          <td>
            <badge class="badge-dot mr-4" :type="row.item.statusType">
                <i :class="`bg-${row.item.statusType}`"></i>
                <span class="status">{{ row.item.stressstatus }}</span>
            </badge>
          </td>
          
        </template>
      </base-table>
    </div>
  </div>
</template>
<script>
export default {
  name: "page-visits-table",
  data() {
    return {
      tableData: [
        {
          Studentname: "Jia Sheng",
          class: "1901",
          stressstatus: "stressed",
          statusType: "danger",
        },
        {
          Studentname: "Doris Wong",
          class: "1901",
          stressstatus: "stressed",
          statusType: "danger",
        },
         {
          Studentname: "Lau Lok Nam",
          class: "1901",
          stressstatus: "stressed",
          statusType: "danger",
        },
        {
          Studentname: "Celine Lam",
          class: "1901",
          stressstatus: "slightly stressed",
          statusType: "warning",
        },
      ],
    };
  },
};
</script>
<style>
  #warning_card {
    border:3px solid black;
    border-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='100' height='100' border-radius='50px' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cstyle%3Epath%7Banimation:stroke 5s infinite linear%3B%7D%40keyframes stroke%7Bto%7Bstroke-dashoffset:776%3B%7D%7D%3C/style%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='red' /%3E%3Cstop offset='25%25' stop-color='red' /%3E%3Cstop offset='50%25' stop-color='red' /%3E%3Cstop offset='100%25' stop-color='red' /%3E%3C/linearGradient%3E %3Cpath d='M1.5 1.5 l97 0l0 97l-97 0 l0 -97' stroke-linecap='round' stroke-linejoin='round' stroke='url(%23g)' stroke-width='3' stroke-dasharray='388'/%3E %3C/svg%3E") 1;
  }
</style>
