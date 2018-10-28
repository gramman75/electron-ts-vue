<template>
    <transition-comp />
    
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TransitionComponent from "@/components/TransitionComponent.vue";


@Component({
    components: {
        'transition-comp' : TransitionComponent
    }
})
export default class Transition extends Vue{

}
</script>
