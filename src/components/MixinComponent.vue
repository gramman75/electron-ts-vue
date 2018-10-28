<template>
</template>

<script lang="ts">
import { Vue, Component, Mixins } from "vue-property-decorator";
import MixinClass  from "@/common/MixinClass";

@Component
// ({
//     mixins : [MixinClass]
// })
export default class Transition extends Mixins(MixinClass){
// export default class Transition extends Vue{
    
    created() {
        this.foo()
        this.conflicting()
    }

    conflicting() {
        console.log('from self')
    }
}
</script>
