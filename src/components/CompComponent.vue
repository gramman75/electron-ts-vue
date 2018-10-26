<template>
    <button v-on:click="incrementCounter">{{ counter }}</button>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class CompComponent extends Vue{

    counter: number

    constructor(){
        super()
        this.counter = 0
    }
    
    incrementCounter(){
        this.counter++
        this.$emit('increment')
    }
}
</script>

