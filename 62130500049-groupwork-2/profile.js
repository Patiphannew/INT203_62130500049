const app = {

    data() {
        return {
            name: 'Patiphannew',
            job:'Hacker',
            img:'https://fsa.zobj.net/crop.php?r=ZLZ8FtvKQk_ysDd08RTDwoTBpHUptQAGWTjbb__SpNgWEkI537BuBGUsx8-1Crgrff3SR9Nf_2_Bv8MeYLnHtzznwwGCffWCjTTyelsIPebpsOolSZF2GhkUOBQIYFYQEIq2gk2XL7iXEuuW',
            Article:'8',
            Followers:'162',
            Ratings:'8.9'
            // shown: true,
            // url: 'http://www.sit.kmutt.ac.th'
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