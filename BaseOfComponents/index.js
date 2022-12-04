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

//EVENTS
//events listening
Vue.component('blog-post-events', {
    props: ['post'],
    template: '<div class="blog-post">' +
        '<h3>{{ post.title }}</h3>' +
        '<button v-on:click="$emit(\'enlarge-text\')">' +
            'Increase font-size' +
        '</button>' +
        '<div v-html="post.content"></div>' +
    '</div>'
})

//Emit data in event
Vue.component('blog-post-events-data', {
    props: ['post'],
    template: '<div class="blog-post">' +
                '<h3>{{ post.title }}</h3>' +
                '<button v-on:click="$emit(\'enlarge-text\', 0.1)">' +
                    'Increase font-size' +
                '</button>' +
                '<div v-html="post.content"></div>' +
            '</div>'
})


new Vue({
    el:"#app-3", 
    data: {
        posts: [
            {
                id: 1, 
                title: "My journey with Vue",
                content: '<p>One one one one</p><p>One1 one1 one1</p>'
            },
            {
                id: 2, 
                title: "Blogging with Vue",
                content: '<p>Two two two</p><p>Two2 two2 two2</p>' 
            },
            {
                id: 3, 
                title: "Why Vue is so fun",
                content: '<p>Three three three</p><p>Three3 three3 three3</p>'
            }
        ],
        postFontSize: 1
    },

    //for increase font-size through method
    methods: {
        onEnlargeText: function (enlargeAmount) {
            this.postFontSize +=enlargeAmount
        }
    }
})


//v-model Usage in Components
Vue.component('custom-input', {
    props: ["value"],
    template: '<div><p>{{ value }}</p><input ' +
                'v-bind:value="value" ' +
                'v-on:input="$emit(\'input\', $event.target.value)"' +
                '></div>' 
})
new Vue({
    el: "#app-4",
    data: {
        searchText: "Enter phrase"
    }
})

Vue.component("slots", {
    template: '<div>' +
                '<strong>Hello!</strong>' +
                '<slot></slot>' + 
            '</div>'
})
new Vue({
    el:"#app-5"
})

