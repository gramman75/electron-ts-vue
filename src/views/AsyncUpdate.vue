<template>
    <async-update />
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import AsyncUpdateComponent  from '@/components/AsyncUpdateComponent.vue'
@Component({
    components :{
       'async-update' : AsyncUpdateComponent 
    }
})
export default class List extends Vue{
}

</script>