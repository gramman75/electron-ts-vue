<template>
    <custom-directive />
    
</template>

<script lang="ts">
import  { Component, Vue } from "vue-property-decorator";
import CustomDirectiveComponent from "@/components/CustomDirectiveComponent.vue";



@Component({
    components : {
        'custom-directive': CustomDirectiveComponent
    }
})
export default class CustomDirective extends Vue{
}
</script>
