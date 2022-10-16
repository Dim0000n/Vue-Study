
//Интерполяции

//текст
new Vue({
    el:"#app-1",
    data: {
        msg: 'app1'
    } 
})

//v-once
new Vue({
    el:"#app-2",
    data: {
        msg: 'Old message'
    },
    methods: {
        changeMessage: function() {
            this.msg = "NEW message";
        }
    }
})

//сырой html
new Vue({
    el:"#app-3",
    data: {
        rawHtml: "<span style='color: red'> This text must be red </span>" 
    }
})

//атрибуты
new Vue({
    el:"#app-4",
    data: {
        dynamicId: 0,
        isButtonDisabled: false
    },
    methods: {
        increaseId: function() {
            ++this.dynamicId
        },
        switchOnOff1: function() {
            this.isButtonDisabled = !this.isButtonDisabled
        } 
    }
})