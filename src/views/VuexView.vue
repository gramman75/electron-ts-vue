<template>
    <vuex-comp />
</template>

<script lang="ts">
import  { Component, Vue } from "vue-property-decorator";
import VuexComponent from "@/components/VuexComponent.vue";


@Component({
    components : {
        'vuex-comp': VuexComponent 
    }
})
export default class VuexView extends Vue{
}
</script>
