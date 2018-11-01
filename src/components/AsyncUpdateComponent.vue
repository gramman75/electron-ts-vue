<template>
    <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
            <v-flex xs12>
                <v-btn @click="updateMessage">Click</v-btn>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card dark color="primary">
                    <v-card-text>
                        {{ message }}
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { constants } from 'http2';
@Component
export default class AsyncUpdateComponent extends Vue{
    message: string

    constructor(){
        super()
        this.message = '갱신안됨'
    }

    updateMessage(){
        this.message = '갱신됨.'
        console.log(this.$el.textContent)

        this.$nextTick(function(){
            console.log(this.$el.textContent)
        })
    }
}

</script>