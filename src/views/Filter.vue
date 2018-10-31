<template>
    <filter-comp />
    
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import FilterComponent from '@/components/FilterComponent.vue'
@Component({
    components :{
       'filter-comp' : FilterComponent 
    }
})
export default class List extends Vue{
}

</script>