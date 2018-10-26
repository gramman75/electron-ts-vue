<template>
    <div>
        <div id="app-1" class="border">
            <button v-on:click="counter += 1">Click</button>
            <p>Button Click Count : {{ counter }}</p>
        </div>

        <div id="app-2" class="border">
            <button name="bnt1" id="bnt1" class="btn btn-warning" v-on:click="warn('Form cannot be submitted yet',$event)" role="button">Warn</button> 
        </div>
        <div id="app-3" class="border">
            <button name="bnt2" id="bnt2" class="btn btn-warning" v-on:click.once="warn('Form cannot be submitted yet',$event)" role="button">Only 1 Warn</button> 
        </div>
        <div id="app-3" class="border">
            <input type="text" v-model.number="inputValue" v-on:keyup.enter="submit">
        </div>

        <div id="app-4" class="border">
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Launch demo modal
            </button>
        </div>

        <modal v-bind:newMessage="inputValue" v-bind:cb="submit" />
    </div>
    
</template>


<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { ipcRenderer } from "electron";
import  Modal from "@/components/Modal.vue"

@Component({
    components:{
        'modal' : Modal // or Modal
    }
})
export default class EventComponent extends Vue{

    counter: number
    msg: string
    inputValue: string 
    constructor(){
        super();
        this.counter = 0
        this.msg = "경고 메세지"
        this.inputValue = '9' 
    }

    warn(message: string, event: Event ) {
        if (event) event.preventDefault();
        ipcRenderer.send('warn', message)
        // alert(message)
    }

    submit() {
        alert('keyup enter')
    }
}
</script>
