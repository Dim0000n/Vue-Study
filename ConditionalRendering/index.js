//v-if
new Vue({
    el: "#app-1",
    data: {
        awesome: true
    },
    methods: {
        changeAwesome: function(){
            this.awesome = !this.awesome
        }
    } 

})

//отображение нескольких тэгов по условию (v-if and template)
new Vue({
    el:"#app-2",
    data: {
        ok: true
    },
    methods: {
        changeOk: function () {
            this.ok = !this.ok
        }
    },
    computed: {
        computedLabel: function () {
            return this.ok ? "Hide template" : "Show template"
        }
    }
})

// v-else, чтобы  v-if работало, нужно создать экземпляр класса
new Vue({
    el:"#app-3"
}) 