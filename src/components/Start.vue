
<template>
    <div>
        <div id="app">
            {{ message }}
        </div>

        <div id="app-3">
            <p v-if="seen">I Can see.</p>
        </div>

        <div id="app-4">
            <ol>
                <li v-for="todo in todos" :key="todo.id">
                    {{ todo.text }}
                </li>
            </ol>
        </div>

        <div id="app-5">
            <p>{{ message }}</p>
            <button v-on:click="reverseMessage">Revers Message</button>
        </div>

        <div id="app-6">
            <p>{{ message }}</p>
            <input class="form-control form-control-lg" type="text" v-model="message">
        </div>
        
    </div>

</template>
<script lang="ts">


import { Component, Vue , Prop} from "vue-property-decorator";

@Component({
    props: {
        todos: Array<any>()
    }
})
export default class Start extends Vue{
    // @Prop() todos: Array<any> = []
    // @Prop({default: []})
    // todos: Array<any> =[]


    message: string
    seen: boolean

    constructor(){
        super()
        this.seen = true
        this.message = 'Hello'
        // this.todos =[
        //     { id: 1,  text: 'Javascript'},
        //     { id: 2, text: 'Java'},
        //     { id: 3, text: 'Python'},
        //     { id: 4, text: 'Vue'}
        // ]
    }

    reverseMessage(): void{
        this.message = this.message.split('').reverse().join('')
    }

}
</script>

