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

//отображение отфильтрованных/отортированных выражений
new Vue({
    el: "#app-4",
    data: {
        numbers: [1, 2, 3, 4, 5],
        sets: [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]]
    },
    computed: {
        evenNumbers: function () {
            return this.numbers.filter(function (number) {
                return number % 2 === 0
            })
        }
    },
    methods: {
        even: function (set) {
            return set.filter(function (number) {
                return number % 2 === 0
            })
        }
    }
})

//v-for и диапазоны
new Vue({
  el: "#app-5"  
})

//v-for и template
new Vue({
    el: "#app-6",
    data: {
        check: "kek",
        items: [
            { msg: "Foo" },
            { msg: "Bar" }
        ]
    }
})