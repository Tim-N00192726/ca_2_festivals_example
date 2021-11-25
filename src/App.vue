<template>
  <div>
    <MyNavBar />
    <b-container>
      <br />
      <b-row>
        <router-view  />
      </b-row>
      <MyFooter />
    </b-container>
  </div>
</template>

<script>
import MyNavBar from "@/components/MyNavBar.vue"
import MyFooter from "@/components/MyFooter.vue"

export default {
  name: "App",
  components: {
    MyNavBar,
    MyFooter
  },
  data() {
    return {

    }
  },
  created() {
    if(localStorage.getItem('token')) {
      this.$store.commit('SET_LOGGED_IN_STATUS', true)
    }
    else {
      this.$store.commit('SET_LOGGED_IN_STATUS', false)
    }
  },
  methods: {
   
  }
};
</script>

<style>

</style>
