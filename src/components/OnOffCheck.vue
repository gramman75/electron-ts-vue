<template>
    <div class="container">
        <header>
            <h1>Are You Online?</h1>
            <div class="button-holder"> 
                <button id="checkStatusButton" type="button">Check Status</button>
            </div>
        </header>
        <section class="main">
            <h2 id="h2-online">You are Online</h2>
            <h2 id="h2-offline">You are NOT Online</h2>
        </section>
        <footer></footer>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ipcRenderer } from 'electron';



@Component
export default class OnOffCheck extends Vue {

    private onlineStatus: any = undefined
    private created(){
        ipcRenderer.on('update-online-status', this.updateOnlineStatus)
    }

    private mounted(){
        // window.addEventListener('online', this.updateOnlineStatus)
        // window.addEventListener('offline', this.updateOnlineStatus)
        let btnCheckStatus = document.getElementById('checkStatusButton');
        
        if (btnCheckStatus)
            btnCheckStatus.addEventListener('click', this.checkOnlineStatus)

        this.checkOnlineStatus()
    }

    private checkOnlineStatus(){
        ipcRenderer.send('check-online-status')
    }

    private updateOnlineStatus(event: any, status: any): void{
        let checking = document.getElementById('h2-checking')
        let online = document.getElementById('h2-online')
        let offline = document.getElementById('h2-offline')
        
        // let status = navigator.onLine ? 'On-Line' : 'Off-Line'

        if( status.online) {
            document.body.style.backgroundColor = 'green'

            if (checking) checking.style.display = 'none'
            if (online) online.style.display = 'block'
            if (offline) offline.style.display = 'none'
        } else {
            document.body.style.backgroundColor = 'red'
            if (checking) checking.style.display = 'none'
            if (online) online.style.display = 'none' 
            if (offline) offline.style.display = 'block'
        }


        if (this.onlineStatus !== undefined && this.onlineStatus !== status.online){
            let note = new Notification('Your are ' + status, {
                body: '상태를 표시',
                data: 'data',
                dir:  "auto",
                icon: 'icon',
                lang: 'lang',
                tag: 'tag'
    
            })
    
            note.onclick = () =>{
                console.log('Notification Clicked')
            }

            this.onlineStatus = status.online

        }

    }

}
</script>



<style scoped>
    html,
    body {
        padding: 0;
        margin: 0;
    }

    body {
        font-family: 'Helvetica Neue', Helvetica, sans-serif;
    
    }
    header {
        position: absolute;
        width: 100%;
        height: 20px;
        top: 0;
        left: 0;
        padding-left: 15px;
        padding-top: 5px;
        background-color: #CCC;
        border-bottom: 1px solid #999;
    }

    header h1 {
        font-size: 12px;
        font-weight: bolder;
        margin: 0;
        padding: 0;
    }

    .button-holder {
        position: absolute;
        right: 25px;
        bottom: 5px;
        width: auto;
        height: auto;
        padding-top: 5px;
    }

    section {
        width: 100%;
        margin-top: 30px;
    }

    section h2 {
        display: none;
        font-size: 48px;
        font-weight: 100;
        margin: 0;
        padding: 0;
        text-align: center;
    
    }
    footer {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 10px;
        padding-bottom: 5px;
        border-top: 1px solid #999;
        background-color: #CCC;
    }
</style>
