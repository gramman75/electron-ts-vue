<template>
    <ListRendering :todos="todos" />
    
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ListRendering from '@/components/ListRendering.vue'
@Component({
    components :{
        ListRendering
    }
})
export default class List extends Vue{
    private todos: Array<any>

    constructor(){
        super()
        this.todos = [
            {id: 1, text: 'clean', isComplete: true},
            {id: 2, text: 'wash', isComplete: false},
            {id: 3, text: 'sleep', isComplete: true},

        ]
    }
}

</script>