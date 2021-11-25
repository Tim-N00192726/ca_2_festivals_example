<template>
  <b-col>
    <h2>Welcome to the Festivals Index page</h2>
    <b-button :to="{
      name: 'festivals_create'
    }" 
    variant="primary" 
    class="float-right"
    >
    Create
    </b-button>
    
    <div>
      <b-table head-variant="dark" striped hover responsive :items="festivals" :fields="headings">
        <template #cell(title)="data" >
          <router-link :to="{name:'festivals_show', params: {id: data.item._id}}"> {{ data.value }} </router-link>
        </template>
        <template #cell(start_date)="data" >
           {{ new Date(data.value).toLocaleString() }}
        </template>
        <template #cell(end_date)="data" >
           {{ new Date(data.value).toLocaleString() }}
        </template>
      </b-table>
    </div>

  </b-col>
</template>

<script>
import axios from 'axios'
export default {
  name: "FestivalsIndex",
  components: {},
  data() {
      return{
          headings: [ 
            { 
              key: 'title',
              sortable: true
            },
             'description',
             'city',
             { 
              key: 'start_date',
              sortable: true
            },
             'end_date'
              ],
          festivals: []
      }
  },
  mounted() {
      this.getData()
  },
  methods: {
      getData() {
          axios
            .get("http://festivals-api.herokuapp.com/api/festivals")
            .then(response => {
                console.log(response)
                this.festivals = response.data
            })
            .catch(error => console.log(error))
      }
  }
};
</script>

<style scoped>

  .btn {
    margin-bottom: 10px;
  }

</style>