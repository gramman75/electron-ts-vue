<template>
  <div class="hello">
    <ul class="list-group">
      <li class="list-group-item flex-container" v-for="post in posts" :key="post.data.id" @click="openImage">
        <img :src="post.data.thumbnail" class="thumbnail"/>
        <div>{{ post.data.title}}</div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios'
import { ipcRenderer } from 'electron';

@Component
export default class HelloWorld extends Vue {
  private posts: Array<any> = []

  private created() {
    axios.get('https://reddit.com/r/aww.json')
      .then(response => {
        this.posts = response.data.data.children
      })
      .catch(error =>{
        console.log(error)
      })
  }

  private openImage() {
    ipcRenderer.send('toggle-image')
  }



}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.thumbnail {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.flex-container{
  display: flex;
  align-items: center;
}

.list-group-item{
  cursor: pointer;
}
.list-group-item:hover{
  background-color: #eee;
}
</style>
