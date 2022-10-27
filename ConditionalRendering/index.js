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

//v-else-if
new Vue({
    el:"#app-4",
    data: {
        types: ['A', 'B', 'C', 'D'],
        index: 0
    },
    computed: {
        //возвращает значение элемента массива
        type: function() {
            return this.types[this.index]
        }
    },
    methods: {
        //переходит к следующему элементу массива
        shiftToNext: function() {
         this.index = (this.index + 1) % this.types.length
        }
    }
})


//управление повторным использование элементов при помощи key
new Vue({
    el:"#app-5",
    data: {
        loginTypes: ["username", "email"],      //массив типов инутов
        index: 0,                               //индекс выдачи
        indexKey: 0,                            //индекс выдачи для инпута с key
        title: "Try to print something and press thr button"    
    },
    computed: {
        loginType: function() {return this.loginTypes[this.index]},     
        loginTypeKey: function() {return this.loginTypes[this.indexKey]}
    },
    methods: {
        switchType: function() {
            this.index = (this.index + 1) % this.loginTypes.length
        },
        switchTypeKey: function() {
            this.indexKey = (this.indexKey + 1) % this.loginTypes.length
        }
    }
})

new Vue({
    el: "#app-6",
    data: {
        flag:true
    },
    computed: {
        label: function() {
            return this.flag ? "Hide" : "Show"
        }
    },
    methods: {
        switchFlag: function() {
            this.flag = !this.flag
        }
    }
})