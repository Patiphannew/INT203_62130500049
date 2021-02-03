const app = {

    data() {
        return {
            name: 'Patiphannew',
            job:'Hacker',
            img:'https://fsa.zobj.net/crop.php?r=ZLZ8FtvKQk_ysDd08RTDwoTBpHUptQAGWTjbb__SpNgWEkI537BuBGUsx8-1Crgrff3SR9Nf_2_Bv8MeYLnHtzznwwGCffWCjTTyelsIPebpsOolSZF2GhkUOBQIYFYQEIq2gk2XL7iXEuuW',
            post:'Posts',
            follower:'Followers',
            following1:'Following',
            posts:'8',
            followers:'162',
            following2:'330',
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