//State animation via observer
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

//CSS-color animation via observer
var Color = net.brehaut.Color //from color-js library

new Vue({
    el: '#app2',
    data: {
        colorQuery: "",
        color: {
            red: 0,
            green: 0,
            blue: 0,
            alpha: 1
        },
        tweenedColor: {}
    },

    //created-hook
    created: function() {
        this.tweenedColor = Object.assign({}, this.color) //copy object this.color to this.tweenedColor
    },

    //watch-hoot
    watch: {
        color: function() {
            function animate () {
                if (TWEEN.update()) {
                    requestAnimationFrame(animate) //say to browser, that we want to animate
                }
            }
            
            //from tween-library
            new TWEEN.Tween(this.tweenedColor)
            .to(this.color, 750)
            .start()
            
            animate()
        }
    },
    computed: {
        tweenedCSSColor: function() {
            return new Color({
                red: this.tweenedColor.red,
                green: this.tweenedColor.green,
                blue: this.tweenedColor.blue,
                alpha: this.tweenedColor.alpha
            }).toCSS()
        }
    },
    methods: {
        updateColor: function() {
            this.color = new Color(this.colorQuery).toRGB()
            this.colorQuery = ""
        }
    }

})