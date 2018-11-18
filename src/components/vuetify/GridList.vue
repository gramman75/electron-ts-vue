<template>
    <v-layout>
        <v-flex xs12 sm6 offset-sm3>
            <v-card>
                <v-card-actions>
                    <v-select :items="items" v-model="size" label="select size"></v-select>
                    <v-spacer></v-spacer>
                </v-card-actions>
            </v-card>

            <v-container v-bind="{ [`grid-list-${size}`] : true }" fluid>
                <v-layout row wrap>
                    <v-flex v-for="n in 9" :key="n" xs4>
                        <v-card flat tile>
                            <v-img :src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`" height="150px"></v-img>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-flex>
    </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class GridList extends Vue{
    size: string = ''
    items: Array<any> = []

    constructor() {
        super()
        this.size = 'xs'
        this.items =[
            {text: 'Extra samll', value: 'xs' },
            {text: 'Small', value: 'sm' },
            {text: 'Medium', value: 'md' },
            {text: 'Large', value: 'lg'},
            {text: 'Extra large', value: 'xl'}
        ]
    }

    mounted() {
        window.addEventListener('resize', () => {console.log(this.$vuetify.breakpoint.name)})
        console.log(this.$vuetify.breakpoint)  
    }
}
</script>
