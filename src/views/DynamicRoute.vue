<template>
    <dynamic-route />
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import DynamicRouteComponent  from "@/components/DynamicRouteComponent.vue";


@Component({
    components: {
        'dynamic-route' : DynamicRouteComponent 
    }
})
export default class DynamicRoute extends Vue{

}
</script>
