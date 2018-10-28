<template>
    <div>
        <p> {{ total }}</p>
        <button-counter v-on:increment="incrementTotal" />
        <button-counter v-on:increment="incrementTotal" />
        <button-counter v-on:click.native="doSomething" v-on:increment="incrementTotal"/>
        <currency-input v-model="price" />
        <div class="border">
            <h2>Slot</h2>
            <slot-component ref="slot"> <!-- 직접 참조를 위해 ref 속성 사용 -->
                <h4 slot="header">Header</h4>
                <p> Parent Content 1</p>
                <p> Parent Content 2</p>
                <h4 slot="footer">Footer</h4>
            </slot-component>
            <button @click="refTest()">Child Ref</button>
        </div>

        <div class="border">
            <h2>동적 Component</h2>
            <component :is="currentView"></component>
        </div>
    </div>
</template>


<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import CompComponent from '@/components/CompComponent.vue'
import CurrencyComponent from '@/components/CurrencyComponent.vue'
import SlotComponent from '@/components/SlotComponent.vue';

@Component({
    components: {
        'button-counter' : CompComponent,
        'currency-input' : CurrencyComponent,
        'slot-component' : SlotComponent,
        // 'slot-component' : () => import('@/components/SlotComponent.vue'),
    }
})
export default class Comp extends Vue{
    total: number
    price: number
    currentView: string

    constructor(){
        super()
        this.total = 0
        this.price = 0
        this.currentView = 'slot-component'
    }
    incrementTotal(){
        this.total++
    }

    refTest(){
        let child = this.$refs.slot // child vue component, 반응적이지 않음.
        console.log(child)
    }

    doSomething() {
        alert('Do Something')
    }

}
</script>

