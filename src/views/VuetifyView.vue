<template>
<div>
    <v-container> 
        <h1>Grid</h1>
        <vc-grid />
    </v-container>
</div>
    
</template>


<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import VuetifyGrid from "@/components/VuetifyGrid.vue";
@Component({
    components :{
        'vc-grid' : VuetifyGrid 
    }
})
export default class VutifyView extends Vue{

}

</script>
