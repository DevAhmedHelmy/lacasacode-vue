<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse container">
        <!-- for logged-in user-->

        <div class="navbar-nav" v-if="isLoggedIn">
          <router-link to="/" class="nav-item nav-link">Home</router-link>
          <router-link to="/centers" class="nav-item nav-link"
            >Centers</router-link
          >
          <a class="nav-item nav-link" style="cursor: pointer" @click="logout"
            >Logout</a
          >
        </div>
        <!-- for non-logged user-->
        <div class="navbar-nav" v-else>
          <router-link to="/" class="nav-item nav-link">Home</router-link>
          <router-link to="/login" class="nav-item nav-link">login</router-link>
          <router-link to="/register" class="nav-item nav-link"
            >Register
          </router-link>
        </div>
      </div>
    </nav>
    <br />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      isLoggedIn: false,
    };
  },
  mounted() {
    if (localStorage.getItem("token") !== null) {
      this.isLoggedIn = true;
    }
  },
  
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.push("/login");
      this.isLoggedIn = false;
    },
  },
};
</script>
