<template>
    <div>
        <render :level="1" >Hello World </render>
    </div>
</template>

<script lang="ts">
import  { Component, Vue } from "vue-property-decorator";
import RenderComponent from "@/components/RenderComponent.vue";


@Component({
    components : {
        'render':  RenderComponent 
    }
})
export default class Render extends Vue{
}
</script>
