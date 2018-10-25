<template>
   <EventComponent /> 
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import EventComponent from '@/components/EventComponent.vue'
@Component({
    components: {
        EventComponent
    }
})
export default class Event extends Vue{

} 
    
</script>
