<template>
  <div class="home">
    <OnOffCheck />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import OnOffCheck from '@/components/OnOffCheck.vue'; // @ is an alias to /src

@Component({
  components: {
    OnOffCheck,
  },
})
export default class OnOff extends Vue {}

</script>
