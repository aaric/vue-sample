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
// http://jsonplaceholder.typicode.com/guide.html
export default {
  data() {
    return {
      msg: "hello fetch!",
      user: {},
      users: []
    };
  },
  mounted() {
    // GET
    /*fetch('https://jsonplaceholder.typicode.com/posts)
      .then(response => response.json())
      .then(json => (this.users = json))*/
  },
  methods: {
    add: function() {
      // POST
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        body: JSON.stringify(this.user),
        headers: {
          "Content-type": "application/json;charset=UTF-8"
        }
      })
      .then(response => response.json())
      .then(json => this.users.unshift(this.user));
    }
  }
};
</script>
