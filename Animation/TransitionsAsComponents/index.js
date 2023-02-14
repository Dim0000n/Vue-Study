Vue.component('animated-integer', {
    template: '<span>{{ tweeningValue }}</span>',
    props: {
        value: {
            type: Number,
            required: true
        }
    },
    data: function() {
        return {
            tweeningValue: 0
        }
    },

    watch: {
        value: function (newValue, oldValue) {
            this.tween(oldValue, newValue)
        }
    },

    mounted: function () {
        this.tween(0, this.value)
    },

    methods: {
        tween(startValue, endValue) {
            var vm = this
            function animate () {
                if (TWEEN.update()) {
                    requestAnimationFrame(animate)
                }
            }

            new TWEEN.Tween({tweeningValue: startValue})
                .to({tweeningValue: endValue}, 500)
                .onUpdate( function() {
                    vm.tweeningValue = this.tweeningValue.toFixed(0)
                })
                .start()

            animate()
        }
    }
})

new Vue({
    el: "#app1",
    data: {
        firstNumber: 20,
        secondNumber: 40
    },
    computed: {
        result: function() {
            return this.firstNumber + this.secondNumber
        }
    }
})