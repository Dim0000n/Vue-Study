//введение переменных в DOM
var app = new Vue({
    el: '#app',
    data: {
        message: 'Привет, Vue!'
    }
})

app.message = 'This is new message!'

//Изменение аттрибутов
var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'Вы загрузили эту страницу ' + new Date().toLocaleString()
    }
})

//Условие 
var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

app3.seen = false;

//циклы
var app4 = new Vue ({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Create something cool'}
        ]
    }
})

app4.todos.push({ text: 'Get profit' })

//функции
var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello, Vue.js!'
    },
    methods: {
        reverseMessage1: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

//v-model
var app6 = new Vue({
    el:'#app-6',
    data: {
        message: 'Hello, Vue.js!'
    }
})

//компоненты

//todo-item - название компонента
//props - входные параметры
//todo - название параметра
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            {id: 0, text: 'vegetables'},
            {id: 1, text: 'cheeese'},
            {id: 2, text: 'something else'}
        ]
    }
})