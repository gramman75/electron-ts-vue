<template>
    <FormComponent />    
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"
import FormComponent from "@/components/FormComponent.vue"
@Component({
    components: {
        FormComponent
    }
})
export default class Form extends Vue{

}
</script>
