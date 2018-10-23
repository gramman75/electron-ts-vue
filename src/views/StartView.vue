
<template>
    <div>
        <Start :todos="items" />
    </div>

</template>
<script lang="ts">
import { Component, Vue , Prop} from "vue-property-decorator";
import  Start from "@/components/Start.vue";

@Component({
    components:{
        Start
    }
})
export default class StartView extends Vue{
    private items: Array<any>

    constructor(){
        super()
        this.items = [
            { id: 1, text: 'Javascript'},
            { id: 2, text: 'Java'},
            { id: 3, text: 'Python'},
            { id: 4, text: 'Vue'}
        ]
    }

}
</script>

