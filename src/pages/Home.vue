<template>
  <b-col>
    <h2>Welcome to the Cloud Festivals Website</h2>

      <div v-if="!loggedIn">
          Email: <input type="email" v-model="form.email" />
          <br><br>
          Password: <input type="password" v-model="form.password" />
          <button @click="login(form)">Submit</button>
      </div>
      <p v-else>
        you are logged in
      </p>
  </b-col>
</template>

<script>

import { mapActions, mapState } from 'vuex'

export default {
  name: "Home",
  components: {

},
  data() {
    return {
      form: {
        email: "admin@festivals.ie",
        password: "secret",
      },
    }
  },
  computed: {
    ...mapState(['loggedIn'])
  },
  methods: {
    ...mapActions(['login'])
  }
};
</script>
