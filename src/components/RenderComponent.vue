<template>
  <v-layout row wrap>
    <v-flex xs12 sm4>
      <v-chip color="red" text-color="white" @click="saveFile">
          <slot></slot>
      </v-chip>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import  { Component, Vue, Prop } from "vue-property-decorator";
import fs from "fs"
import electron from "electron"

@Component
export default class RenderComponent extends Vue{
    @Prop({
        type: Number,
        required: true
    }) level!: number
    constructor(){
        super()
    }

    render(createElement: Function){
        return createElement(
            'h' + this.level,
            this.$slots.default
        )
    }

    saveFile() {
        electron.remote.dialog.showOpenDialog({
            title: 'Select...',
            properties : ['openFile']
        })
        
        fs.readFile('d:\\hr_psn_mst', (err: any , data: Buffer) =>
        {
            console.log(data)

        })
    }
}
</script>
