<template>
    <div>
        <input type="text" v-model=todoId />
        <p> {{ viewResult() }} </p>   
        <p><button @click="updateCount">Update Count</button></p>
        <button @click="updateCountAction">Action Update</button>
    </div>
</template>

<script lang="ts">
import  { Component, Vue } from "vue-property-decorator";


@Component
export default class VuexComponent extends Vue{
    todoId: number

    constructor() {
        super()
        this.todoId = 1
    }

    updateCount(){
        this.$store.commit('increment', {count : 3})
        console.log(this.$store.state.cnt)
        console.log(this.$store.getters.getCount)
    }

    updateCountAction() {
        this.$store.dispatch('actionB')

    }

    viewResult() {
        // this.$store.commit('increment',{ cnt: 3})
        return this.$store.getters.getList(this.todoId)
    }
}
</script>
