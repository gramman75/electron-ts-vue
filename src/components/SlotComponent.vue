<template>
    <div>
        <h2>{{ title }}</h2>
        <slot name="header" />
        <slot>
            Content가 없는 경우 보입니다.
        </slot>
        <slot name="footer" />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";    

@Component
export default class SlotComponent extends Vue{
    title: string

    constructor(){
        super()
        this.title = 'Child Component'
    }

}
</script>
