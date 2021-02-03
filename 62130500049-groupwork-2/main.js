const app = {
    data() {
        return {
            message: 'Hello',
            name: 'Vue3'
        }
    },
    created(){​​​​
        console.log('message is '+this.msg)
    }​​​​,
    updated(){
        console.log('message change is'+this.msg)
    }
}
mountedApp = Vue.createApp(app).mount('#app')