new Vue({
    el: "#app-1",
    data: {
        isActive: false,
        hasError: false
    }, 
    methods: {
        switchActive: function() {
            this.isActive = !this.isActive
        },
        switchError: function() {
            this.hasError = !this.hasError
        }
    }
})

new Vue({
    el: "#app-2",
    data: {
        classObject: {
            'text-danger': true
        }
    }
})

new Vue({
    el: "#app-3",
    data: {
        hasError: false
    },
    methods: {
        switchError: function() {
            this.hasError = !this.hasError
        }
    },
    computed: {
        classObject: function() {
            return { 'text-danger': this.hasError }
        }
    }
})