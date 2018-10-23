<template>
    <div id="watch-sample">
        <p> Quest yes or no
            <input type="text" v-model="question">
        </p>
        <p>{{ answer }}</p>
    </div>
</template>

<script lang="ts">
import {Vue, Component, Watch} from 'vue-property-decorator';
import * as _ from "lodash";
import Axios from 'axios';

@Component
export default class WatchSample extends Vue{
    question: string
    answer: string

    constructor(){
        super()
        this.question = ''
        this.answer = ''
    }

    @Watch('question')
    onQuestionChanged(value: string, oldValue: string){
        this.answer = '입력중....'
        this.getAnswer()
    }

    getAnswer(){
        let vm = this

        this.answer = '생각중...'
        Axios.get('https://yesno.wtf/api')
            .then(function(response){
                vm.answer = _.capitalize(response.data.answer)
            })
            .catch(function(error){
                vm.answer = '에러 ' + error
            })
    }
}
    


</script>


