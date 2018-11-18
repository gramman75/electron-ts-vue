<template>
    <v-layout row wrap>
        <v-flex>
            <v-card dark>
                <v-responsive :aspect-ratio="16/9">
                    <v-card-text>
                        this card will always 16:9
                    </v-card-text>
                </v-responsive>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class AspectRatios extends Vue{}
</script>

