//v-for
new Vue({
    el: '#app-1',
    data: {
        items: [
            {message: "Foo"},
            {message: "Bar"}
        ]
    }
})


//v-for доступ к родительскому элементу и индексу
new Vue({
    el:"#app-2",
    data: {
        parentMessage: "Parent",
        items: [
            { message: "Foo" },
            { message: "Bar" }
        ]
    }
})

//v-for ддя объекта
new Vue({
    el:"#app-3",
    data: {
        object: {
            title: 'How to do lists in Vue',
            author: 'Jane Doe',
            publishedAt: '2016-04-10'
        },
        object2: {
            title: 'How to do lists in Vue',
            author: 'Jane Doe',
            publishedAt: '2016-04-10'
        },
        object3: {
            title: 'How to do lists in Vue',
            author: 'Jane Doe',
            publishedAt: '2016-04-10'
        }
    }
})