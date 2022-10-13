var app = new Vue({
    el: '#app',
    data: {
        message: 'Привет, Vue!'
    }
})

app.message = 'This is new message!'

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'Вы загрузили эту страницу ' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

app3.seen = false;

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