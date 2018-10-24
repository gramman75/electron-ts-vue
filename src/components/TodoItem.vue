<template>
    <div>
        <li>{{ title }}<button v-on:click="$emit('remove')">X</button></li>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
export default class TodoItem extends Vue{
    @Prop({default: ''}) title!: string

    constructor(){
        super()
    }
}
</script>
