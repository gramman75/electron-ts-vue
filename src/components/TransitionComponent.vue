<template>
   <div id="demo">
        <button v-on:click="show = !show">
            Toggle
        </button>
        <transition name="fade">
            <p v-if="show">hello</p>
        </transition>
    </div> 
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class TransitionComponent extends Vue{
    show: boolean

    constructor(){
        super()
        this.show = true
    }
}
</script>


<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

