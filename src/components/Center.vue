<template>
  <div>
    <ul>
      <li>
        <p><span>Center Name:</span> {{ center.name }}</p>
      </li>
    </ul>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">doctor Name</th>
          <th scope="col">specialization</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="doctor of center.doctors" :key="doctor.id">
          <td>{{ doctor.id }}</td>
          <td>{{ doctor.name }}</td>
          <td>{{ doctor.specialization }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "center",
  data() {
    return {
      center: {},
    };
  },
  mounted() {
    this.getCenters();
  },
  methods: {
    getCenters() {
      this.$axios
        .get("/centers")
        .then((res) => {
          this.center = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
