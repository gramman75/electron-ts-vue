<template>
    <div>
        <input v-bind:value="value" @input="updateValue($event.target.value)" >
    </div>
    
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component 
export default class CurrencyComponent extends Vue{
    @Prop() value!: number

    updateValue(value: string){
        let formattedValue = value.trim().slice(0, value.indexOf('.') === -1 ? value.length : value.indexOf('.') + 3)
        if (formattedValue !== value){
            // (<Element>this.$refs.input).value = formattedValue
        }

        this.$emit('input', Number(formattedValue))
    }


}
</script>

