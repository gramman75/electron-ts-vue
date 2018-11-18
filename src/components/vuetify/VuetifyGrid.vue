<template>
<div>
    <v-container fluid grid-list-md text-xs-center justify-start>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card dark color="primary">
                    <v-card-text class="px-0">12</v-card-text>
                </v-card>
            </v-flex>
            <v-flex v-for="i in 2" :key="`6${i}`" xs6>
                <v-card dark color="secondary">
                    <v-card-text>{{i}}</v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs8 offset-xs3>
                <v-card dark>
                    <v-card-text>Offset1</v-card-text>
                </v-card>
            </v-flex>
        </v-layout>

    </v-container>
    <v-container fluid grid-list-md>
        <v-layout row wrap>
            <v-flex d-flex md4>
                <v-card color="indigo" dark>
                    <v-card-title>Lorem</v-card-title>
                    <v-card-text> {{ lorem }} </v-card-text>
                </v-card>
            </v-flex>
            <v-flex d-flex  md3>
                <v-layout row wrap>
                    <v-flex d-flex>
                        <v-card>
                            <v-card-text> {{ lorem.slice(0,70) }}</v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex d-flex>
                        <v-card>
                            <v-card-text> {{ lorem.slice(0,70) }}</v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex d-flex>
                        <v-card>
                            <v-card-text> {{ lorem.slice(0,70) }}</v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex d-flex md2>
                <v-card>
                    <v-card-text> {{ lorem.slice(0,70) }}</v-card-text>
                </v-card>
            </v-flex>
            <v-flex d-flex md3>
                <v-card>
                    <v-card-text> {{ lorem.slice(0,70) }}</v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
    <v-container fluid>
        <v-toolbar dark color="primary">
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-toolbar-title>Title</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>more_vert</v-icon>
            </v-btn>
        </v-toolbar>
    </v-container> 

    </div>
</template>


<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class VuetifyGrid extends Vue{
    lorem: string ="";

    constructor() {
        super()
        this.lorem = `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
    }
}
</script>

