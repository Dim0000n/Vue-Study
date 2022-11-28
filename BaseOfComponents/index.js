//basic example
Vue.component('button-counter', {
    data: function () {
        return {
            count: 0
        }
    },
    template:  '<button v-on:click="count++">Click counter — {{ count }}</button>'
})

new Vue({ el: "#app-1"})

//properties
Vue.component('blog-post', {
    props: ['title'],
    template: '<p> {{ title }} </p>'
})

new Vue({
    el: "#app-2",
    data : {
        posts: [
            {id: 1, title: "My journey with Vue"},
            {id: 2, title: "Blogging with Vue"},
            {id: 3, title: "Why Vue is so fun"}
        ]
    }
})