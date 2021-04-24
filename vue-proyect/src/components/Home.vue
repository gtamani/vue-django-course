<template>
    <b-container>
        <b-row>
            <b-col style="text-align:center">
                <h1 style="margin-bottom:30px">Welcome friend! <small>by gtamani.</small></h1>
                <div>
                    <img src="../assets/logo.png" style="height:200px;background-color:rgb(0,0,0);padding:10px;border-radius:50%">
                    
                </div>            
            </b-col>
        </b-row>
        <b-row style="text-align:center;margin:50px">
            <b-col v-for="red in redes" :key="red">
                <b-link :href="red.url" target="_blank">
                    <b-alert :variant="red.color" show>
                        {{red.red}}
                    </b-alert>
                </b-link>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name:"Home",
    data(){
        return {
            redes: [
                {red:"Linkedin",url:"https://www.linkedin.com/in/giuliano-tamani-9766a41b8/",color:"info"},
                {red:"Github",url:"https://github.com/gtamani",color:"warning" },
                {red:"WebPage",url:"https://gtamani.com/#main",color:"danger" }
            ]
        }
    }
    
}
</script>

<style>
</style>
