//реверс фразы с помощью js-выражения
new Vue ({
    el: "#app-1",
    data: {
        message: "This is example number one"
    }
})

//реверс фразы с помощью вычисляемого выражения
new Vue ({
    el: "#app-2",
    data: {
        message: "Hello"
    },
    computed: {
        //геттер вычисляемого значения
        reversedMessage: function() {
            return this.message.split("").reverse().join("")
        }
    }
})

//наблюдение с помощью watch
new Vue ({
    el: "#app-3",
    data: {
        firstName: 'Foo',
        lastName: 'Bar',
        fullName: 'Foo Bar'
    },
    watch: {
        firstName: function(val) {
            this.fullName = val + " " + this.lastName
        },
        lastName: function(val) {
            this.fullName = this.firstName + " " + val
        }
    }
})

//наблюдение с помощью вычисляемого свойства
new Vue ({
    el: "#app-4",
    data: {
        firstName:"Computed",
        lastName: "Tracking"
    },
    computed: {
        fullName: function() {
            return this.firstName + " " + this.lastName
        }
    }
})

//сеттеры вычисляемых свойств
new Vue ({
    el: "#app-5",
    data: {
        firstName:"Ivan",
        lastName:"Ivanov"
    },
    computed: {
        fullName: {
            get: function() {
                return this.firstName + " " + this.lastName
            },
            
            set: function (newValue) {
                var names = newValue.split(" ")
                if (names.length > 0)
                {
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
                }
            }
        }
    }
})


//методы наблюдатели
var watchExampleVM = new Vue({
    el: '#app-6',
    data: {
        question: "",
        answer: "A can't answer, if there is no question!"
    },
    watch: {
        question: function (newQuestion, oldQuestion) {
            this.answer = "Wating for you to finish printing..."
            this.debouncedGetAnswer()
        }
    },

    created: function () {
            // _.debounce — это функция lodash, позволяющая ограничить то,
    // насколько часто может выполняться определённая операция.
    // В данном случае мы ограничиваем частоту обращений к yesno.wtf/api,
    // дожидаясь завершения печати вопроса перед отправкой ajax-запроса.
    // Узнать больше о функции _.debounce (и её родственнице _.throttle),
    // можно в документации: https://lodash.com/docs#debounce

    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
    },

    methods: {
        getAnswer: function () {
            if (this.question.indexOf('?') === -1) {
                this.answer = 'Вопросы обычно заканчиваются вопросительным знаком. ;-)'
                return
              }
            this.answer = "Thinking..."
            var vm = this
            axios.get('https://yesno.wtf/api')
            .then(function (response) {
                vm.answer = _.capitalize(response.data.answer)
            })
            .catch(function (error) {
                vm.answer = "ERROR! Can't connect to API" + error
            })
        }
    }
})