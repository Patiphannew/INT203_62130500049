const app = {
    data() {
        return {
            msg: 'Hello,Vue3',
            shown: true,
            url: 'http://www.sit.kmutt.ac.th'
        }
    },
    // created(){​​​​
    //     console.log('message is '+this.msg)
    // }​​​​,
    // updated(){
    //     console.log('message change is'+this.msg)
    // }
}
mountedApp = Vue.createApp(app).mount('#app')