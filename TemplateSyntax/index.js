
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

//JavaScript выражения
new Vue({
    el:"#app-5",
    data: {
        number: 5,
        ok: true,
        message: "This is a message.",
        id: 3
    },
    methods: {
        changeValue: function() {
            this.ok = !this.ok
        }
    }
})

//Динамические аргументы
//поддерживаются версией 2.6.0+
new Vue({
    el: "#app-6",
    data: {
        attributeName: "href",
        url: "https://ru.vuejs.org/v2/guide/syntax.html"
    }
})

//Сокращения
//Сокращение v-bind
new Vue({
    el:"#app-7",
    data: {
        url: "https://ru.vuejs.org/v2/guide/syntax.html",
        key: "href"
    }
})
//сокращение v-on
new Vue({
    el:"#app-8",
    data: {
        event: "click"
    },
    methods: {
        getAlert: function() {
            alert("You've just clicked the Link");
        }
    }
})