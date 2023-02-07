new Vue({
    el: "#app1",
    data: {
        show: true,
        fadeInDuration: 1000,
        fadeOutDuration: 1000,
        maxFadeDuration: 1500,
        stop: true
    },
    //lifecycle hook
    mounted: function() {
        this.show = false
    },
    methods: {
        //before start animation state
        beforeEnter: function (el) {
            el.style.opacity = 0 
        },
        //animation of enter
        enter: function (el, done) {
            var vm = this
            Velocity(el,        //method from velocity.js
                {opacity: 1},
                {
                    duration: this.fadeInDuration,  //duration of animation
                    complete: function() {  //after done
                        done()
                        vm.show = true      //set show parameter to true
                        vm.stop = true
                    }
                })
        },
        //animation of leave
        leave: function(el, done) {
            var vm = this
            Velocity(el,
                {opacity: 0},
                {
                    duration: this.fadeOutDuration,
                    complete: function() {
                        done()
                        vm.show = true
                        vm.stop = true
                    }
             })
        }
    }
})