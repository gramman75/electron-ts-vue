<template>
    <div>
        User {{ $route.params.id }}
    </div>
</template>


<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { RouterOptions, Route } from 'vue-router';

@Component
export default class DynamicRouteComponent extends Vue {
    created() {
        console.log('dynamic component created')
    }

    mounted() {
        console.log('dynamic component mounted')
    }

    @Watch('$route')
    onRouteChanged(to : Route, from: Route){
        console.log(`from : ${from.path}, to : ${to.path}`)
    }
}
</script>
