<template>
  <div>
    <errors :errors="errors" />
    <div class="col-md-8 offset-md-2">
    <form id="form-login">
      <div class="form-group mb-2">
        <label for="">name</label>
        <input type="text" class="form-control" name="name" />
      </div>
      <div class="form-group mb-2">
        <label for="">email</label>
        <input type="email" class="form-control" name="email" />
      </div>
      <div class="form-group mb-2">
        <label for="">password</label>
        <input type="password" class="form-control" name="password" />
      </div>
      <div class="form-group mb-2">
        <label for="">password confirmation</label>
        <input
          type="password"
          class="form-control"
          name="password_confirmation"
        />
      </div>
      <div>
        <div class="form-group">
          <button class="btn btn-primary" type="submit" @click="submit">
            Save
          </button>
        </div>
      </div>
    </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "register",
  data() {
    return {
      errors: null,
    };
  },
  methods: {
    submit(e) {
      e.preventDefault();
      var form = document.getElementById("form-login");
      let formData = new FormData(form);
      this.$axios
        .post("register", formData)
        .then((res) => {
          if (res.status == 200) {
            localStorage.setItem("token", res.data.token);
            this.$router.push("/centers");
          }
        })
        .catch((err) => {
          this.errors = err.response.data.errors;
        });
    },
  },
};
</script>
