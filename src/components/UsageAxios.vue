<template>
  <div>
    <div>{{msg}}</div>
    <hr />
    <h2>Fetch Post</h2>
    <div>
      <p>
        <input type="text" v-model="user.title" />
        <input type="submit" @click="add" />
      </p>
    </div>
    <hr />
    <h2>Fetch Get</h2>
    <div>
      <ol>
        <li v-for="(object, index) in users" :key="index">{{object.title}}</li>
      </ol>
    </div>
    <hr />
  </div>
</template>
<script>
// http://www.axios-js.com/docs/
import axios from 'axios';

export default {
  data() {
    return {
      msg: 'hello axios!',
      user: {},
      users: []
    };
  },
  mounted() {
    // GET
    /*var _this = this;
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(function(response) {
        _this.users = response.data
      });*/
  },
  methods: {
    add: function() {
      // POST
      var _this = this;
      axios.post('https://jsonplaceholder.typicode.com/posts', this.user)
        .then(function(response) {
          _this.users.unshift(_this.user);
        });
    }
  }
};
</script>
