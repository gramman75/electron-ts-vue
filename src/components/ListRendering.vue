<template>
    <div>
        <div class="border" id="app-01">
            <h1> Array List</h1>
            <ul>
                <li v-for="(todo, index) in todos" v-bind:key="todo.id">
                   {{ index }} - {{ todo.text }}
                </li>
            </ul>
        </div>

        <div id="app-2" class="border">
            <h2> Object List</h2>
            <ul>
                <li v-for="(value, key, index) in object" :key="key">
                    {{`${index} - ${key} - ${value}` }}
                </li>
            </ul>
        </div>

        <div id="app-3" class="border">
            <h2>Filtering</h2>
            <input type="text" v-model="search" />
            <ul>
                <li v-for="item in getResult" :key="item.id">
                    {{ item.text }}
                </li>
            </ul>
        </div>      

        <div id="app-4" class="border">
            <h2>Range</h2>
            <span v-for="n in 10" :key="n">{{ n }} </span>
        </div>

        <div id="app-5" class="border">
            <h2>조건부 List</h2>
            <ul>
                <li v-for="todo in todos" v-if="todo.isComplete" :key="todo.id">
                    {{ todo.text }}
                </li>
            </ul>
        </div>

        <div id="app-6" class="border">
            <h2>Todo</h2>
            <div id="todo-list-example">
                <input
                    v-model="newTodoText"
                    v-on:keyup.enter="addNewTodo"
                    placeholder="Add a todo"
                >
                <ul>
                    <TodoItem 
                    v-for="(todo, index) in todos"
                    v-bind:key="todo.id"
                    v-bind:title="todo.text"
                    v-on:remove="todos.splice(index, 1)"
                    /> 
                </ul>
            </div>
        </div>
    </div>    
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import TodoItem from "@/components/TodoItem.vue"
@Component({
    components:{
        TodoItem
    }
})
export default class ListRendering extends Vue{
    @Prop() todos!: Array<any>

    object: any
    search: string = '' 
    newTodoText: string = ''
    nextTodoId: number = 4
    constructor(){
        super()
        this.object ={
            firstName: 'Kim',
            lastName: 'Moon geun',
            tel: '010-0000-0000'
        }
    }

    addNewTodo(){
        this.todos.push({
            id: this.nextTodoId++,
            text: this.newTodoText,
            isComplete: false
        })
    }
    get getResult(){
        return this.todos.filter( todo => (<string>todo.text).startsWith(this.search) )
    }

    mounted(){
        // this.object.house = "APT"
        this.$set(this.object, 'house', 'APT')
        this.object = Object.assign({}, this.object, {
            age: 44,
            favColor: 'yellow'
        })
    }
}
</script>
