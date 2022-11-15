//подписка на события
new Vue({
    el: "#app-1",
    data: {
        counter: 0
    }
})

//Обработчики событий
new Vue({
    el: "#app-2",
    data: {
        name: "Vue.js"
    },
    methods: {
        greet: function(event) {
            alert("Hello, " + this.name + "!")
            if (event) {
                alert(event.target.tagName)
            }
        }
    }
})

//методы и inline-обработчики
new Vue({
    el: "#app-3",
    methods: {
        say: function (message) {
            alert(message)
        },
        warn: function (message, event) {
            if (event) {
                alert(event)
            }
            alert(message)
        }
    }
})

new Vue({
    el: "#app-4",
    methods: {
        say: function (message) {
            alert(message)
        },
        onCtrl: function () {
            alert("Ctrl but might be with Alt or Shift")
        },
        onlyCtrl: function() {
            alert("Only Ctrl")
        },
        onClick: function () {
            alert("Without system modifiers")
        }
    }
})