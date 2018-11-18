<template>
<div>
    <v-container> 
        <v-layout row>
            <v-flex>
            <h1>Grid</h1>
            <vc-grid />
            </v-flex>   
        </v-layout>
        <v-layout row>
            <v-flex>
                <h1>Grid List</h1>
                <vc-grid-list />
            </v-flex>
        </v-layout>

        <v-layout row>
            <v-flex>
                <h1>Aspect Ratios</h1>
                <vc-aspect-ratios/>
            </v-flex>
        </v-layout>

    </v-container>
</div>
    
</template>


<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import VuetifyGrid from "@/components/vuetify/VuetifyGrid.vue";
import GridList from "@/components/vuetify/GridList.vue"
import AspectRatios from '@/components/vuetify/AspectRatios.vue';
@Component({
    components :{
        'vc-grid' : VuetifyGrid,
        "vc-grid-list" : GridList,
        "vc-aspect-ratios": AspectRatios
    }
})
export default class VutifyView extends Vue{

}

</script>
