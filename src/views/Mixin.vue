<template>
    <mixin-comp />
    
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import MixinComponent from "@/components/MixinComponent.vue";


@Component({
    components: {
        'mixin-comp' : MixinComponent 
    }
})
export default class Mixin extends Vue{

}
</script>
