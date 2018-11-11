<template>
    <div>
        <ul>
            <li class="nav-item">
              <router-link to="/onOff">On-Off Line Test</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/raddit">Raddit</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/start">Vue Start</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/list">Vue List</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/event">Vue Event</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/form">Vue Form</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/comp">Vue Component</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/transition">Vue Transition</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/mixin">Vue Mixin</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/customDirective">Vue Custom Directive</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/render">Vue Render</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/filter">Vue Filter</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/asyncUpdate">Vue Async Update DOM</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/dynamicRoute/foo">Vue Dynamic Route(foo)</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/dynamicRoute/bar">Vue Dynamic Route(bar)</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/vuex">Vue Vuex</router-link>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class LeftMenu extends Vue{}
</script>
