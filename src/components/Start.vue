
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
            <button @click="reverseMessage">Revers Message</button>
        </div>

        <div id="app-6">
            <p>{{ message }}</p>
            <input class="form-control form-control-lg" type="text" v-model="message">
        </div>
        
        <div id="app-7"> <p>{{ messageProp }}</p>
        </div>

        <div id="app-8">
            <div class="alert" v-bind:class="classObject"></div>
        </div>

        <div id="app-9">
            <div v-if="message =='1'">
                Display One
            </div>
            <div v-else-if="message =='2'">
                Display Two 
            </div>
            <div v-else-if="message =='3'">
                <h1>Title</h1>
                <p>Paragraph 1</p>
            </div>
            <div v-else>
                Display Any 
            </div>
        </div>
    </div>

</template>
<script lang="ts">


import { Component, Vue , Prop, Watch} from "vue-property-decorator";


@Component
export default class Start extends Vue{
    // @Prop(Number) propA!: number

    @Prop({default: []}) todos!: Array<any>

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

    @Watch('message')
    onMessageChanged(value: string, oldValue: string){
        console.log(`old value : ${oldValue}, new Value : ${value}`)
    }

    get messageProp(){
        return this.message + '_computed'
    }

    get classObject(){
        let p: string = 'alert-primary'
        let map: any = {
            '1' : 'alert-secondary',
            '2' : 'alert-success',
            '3' : 'alert-danger'
        }

        p = map[this.message]||'alert-primary'

        return p
    }

    beforeCreate() {
        console.log('beforeCreate')
    }

    created(){
        console.log('created')
    }

    beforeMount() {
        console.log('beforeMount')
    }

    mounted() {
        console.log('mounted')
    }

    beforeUpdate() {
        console.log('beforeUpdate')
    }

    updated(){
        console.log('updated')
    }

    beforeDestroy(){
        console.log('beforeDestroy')
    }

    destroyed(){
        console.log('destroyed')
    }


    reverseMessage(): void{
        this.message = this.message.split('').reverse().join('')
    }

}
</script>

