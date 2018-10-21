<template>
  <div class="home">
    <SplashWindow />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import SplashWindow from '@/components/SplashWindow.vue';

@Component({
  components: {
    SplashWindow
  },
})
export default class Home extends Vue {}
</script>
