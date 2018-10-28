<template>
    <div>
        <input type="text" />
        <input type="text" v-focus />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";


@Component
export default class CustomDirectiveComponent extends Vue{

}
</script>
