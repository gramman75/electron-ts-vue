<template>
<v-container fluid grid-list-md>
  <v-layout row wrap>
    <v-flex xs12>
      <v-chip color="red" text-color="white" @click="saveFile">
          <slot></slot>
      </v-chip>
    </v-flex>
    
  </v-layout>
  <v-layout row wrap>
      <v-textarea
      name="input-7-1"
      box
      label="Label"
      auto-grow
      v-bind:value="result"
    ></v-textarea>
  </v-layout>
</v-container>  
</template>


<script lang="ts">
import  { Component, Vue, Prop } from "vue-property-decorator";
import fs from "fs"
import electron from "electron"
import { constants } from 'http2';

@Component
export default class RenderComponent extends Vue{
    @Prop({
        type: Number,
        required: true
    }) level!: number

    result: string
    constructor(){
        super()
        this.result = ''
    }

    render(createElement: Function){
        return createElement(
            'h' + this.level,
            this.$slots.default
        )
    }

    saveFile() {
        console.log(this.$store.getters.getCount)
        electron.remote.dialog.showOpenDialog({
            title: 'Select...',
            properties : ['openFile']
        },
        (filePaths: string[], bookmarks: string[])=>{
            if (filePaths){
                let filePath = filePaths[0]
                fs.readFile(filePath, (err: any, data: Buffer)=>{
                    this.result = data.toString()
                    console.log(data.toString())
                })
            }
        })        
        // fs.readFile('d:\\hr_psn_mst', (err: any , data: Buffer) =>
        // {
        //     console.log(data)

        // })
    }
}
</script>
