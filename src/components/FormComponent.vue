<template>
    <form action="">
        <div class="form-group">
            <span class="border border-primary">
                <label for="text">InputBox</label>
                <input type="text" v-model="message" id="text" class="form-control">
                <p> {{ message }} </p>
            </span>
            <label for="textarea">TextArea</label>
            <textarea v-model="message1" class="form-control"></textarea>
            <p style="white-space: pre-line">{{ message1 }}</p>

        </div>
        <div class="form-group form-check">
            <input type="checkbox" v-model="names" class="form-check-input" id="jack" value="JACK">
            <label for="jack" class="form-check-label" >Jack</label>
            <input type="checkbox" v-model="names" class="form-check-input" id="john" value="JOHN">
            <label for="john" class="form-check-label">John</label>
            <input type="checkbox" v-model="names" class="form-check-input" id="mike" value="MIKE">
            <label for="mike" class='form-check-label'>Mike</label>
            <p>{{ names }}</p>
        </div>
        <div>
            <input 
                type="checkbox" 
                v-model="toggle" 
                true-value="yes" 
                false-value="no"
            >
        </div>
        <div class="form-group">
            <select v-model="selected">
            <option disabled value="">Please select one</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
            </select>
            <span>선택함: {{ selected }}</span>
        </div>
    </form> 
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import EventComponent from '@/components/EventComponent.vue';

@Component
export default class FormComponent extends Vue{
    message: string
    message1: string
    checked: boolean 
    names: Array<string>
    selected: string

    toggle: string
    constructor(){
        super()
        this.message = ''
        this.message1 = ''
        this.checked = true
        this.names = ['JACK']
        this.selected = ''
        this.toggle = 'yes'
    }


}
</script>
