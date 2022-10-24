//классы по условиям
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

//класс как объект
new Vue({
    el: "#app-2",
    data: {
        classObject: {
            'text-danger': true
        }
    }
})

//объект как вычилсяемое свойство
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

//массивы
new Vue({
    el:"#app-4",
    data: {
        staticClass: "static",
        errorClass: "text-danger"
    }
})

//массив классов с условием
new Vue({
    el:"#app-5",
    data: {
        staticClass: "static",
        errorClass: "text-danger",
        isError: false
    },
    methods: {
        switchError: function() {
            this.isError = !this.isError
        }
    }
})

//inline styles
new Vue({
    el:"#app-6",
    data: {
        activeColor: 'green',
        fontSize: 30,
        styleObject: {
            color: 'blue',
            fontSize: "20px"
        }
    }
})