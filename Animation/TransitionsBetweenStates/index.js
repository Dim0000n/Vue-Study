new Vue({
    el: "#app1",
    data: {
        number: 0,
        tweenedNumber: 0
    },
    computed: {
        animatedNumber: function () {
            return this.tweenedNumber.toFixed(0) //transform number to string with 0 decimal 
        }
    },
    watch: {
        number: function(newValue) {    //watch the changes in number value
            gsap.to(this.$data, {duration: 0.5, tweenedNumber: newValue})   //animate via GreenSock
        }
    }
})