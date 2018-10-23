
<template>
    <div>
        <Start :todos="items" />
        <WatchSample />
    </div>

</template>
<script lang="ts">
import { Component, Vue , Prop} from "vue-property-decorator";
import  Start from "@/components/Start.vue";
import  WatchSample from "@/components/WatchSample.vue";

@Component({
    components:{
        Start, WatchSample
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

