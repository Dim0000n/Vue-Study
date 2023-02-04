
//Animation of Insert and Delete element from list
//List creation
let list = [];
let N = 10
for (let i=0; i < N; i++) {
    list.push(i)
}

new Vue({
    el: '#app1',
    data: {
        items: list,
        nextNum: N
    },
    methods: {
            //get random index of items
            randomIndex: function () {
                return Math.floor(Math.random() * this.items.length)
            },
            //add a new element at random position
            add: function () {
                this.items.splice(this.randomIndex(), 0, this.nextNum++)
            },
            //remove a random element
            remove: function () {
                this.items.splice(this.randomIndex(), 1)
            }

    }
})


//Transition elements in list
list = []
for (let i = 0; i < 10; i++) {
    list.push(i);
}

new Vue({
    el: "#app2",
    data: {
        items: list
    }, 
    methods: {
        shuffle: function () {
            this.items = _.shuffle(this.items) // function from lodash.js
        }
    }
})

//Any changes animation
list = [];
anyNextNums = 10;
for (let i = 0; i < anyNextNums; i++) {
    list.push(i);
}

new Vue({
    el: "#app3",
    data: {
        items: list,
        nextNum: anyNextNums
    },
    methods: {
        randomIndex: function () {
            return Math.floor(Math.random() * this.items.length)
        },
        add: function () {
            this.items.splice(this.randomIndex(), 0, this.nextNum++)
        },
        remove: function() {
            this.items.splice(this.randomIndex(), 1)
        },
        shuffle : function () {
            this.items = _.shuffle(this.items)
        }
    }

})
