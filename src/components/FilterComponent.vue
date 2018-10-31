<template>
    <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
            <v-flex xs12>
                <v-text-field
                    v-model="v"
                    single-line
                    v-focus
                ></v-text-field>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card dark color="primary">
                    <v-card-text>
                        {{ capitalizeValue}}
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class FilterComponent extends Vue{
    private v: string 

    constructor(){
        super()
        this.v = ''
    }

    get capitalizeValue(){
        if (!this.v) return ''

        let value = this.v.toString()
         
        return value.charAt(0).toUpperCase() + value.slice(1) 
    }

    // capitalize(value: string) {
    //     if (!value) return ''

    //     value = value.toString()
         
    //     return value.charAt(0).toUpperCase() + value.slice(1) 

    // }
}

</script>