//v-if and v-for
new Vue({
    el: "#app1",
    data: {
        items: [
            {name: 'el1'},
            {name: 'el2'},
            {name: 'el3'}
        ]
    }
})

//v-if and v-for via render-functions
Vue.component('v-if-v-for-render', {
    props: ['items'],   //set preperties
    render: function (createElement) {      //initiate render function
        if (this.items.length) {    //if there is something
            return createElement('ul', this.items.map(function (item) { //create ul element and iterate every item in items
                return createElement('li', item.name)   //create li element with name of every item
            }))
        } else {    //if there is no elements
            return createElement('p','There is nothing to show')    //print it
        }
    }
})

new Vue({
   el: "#app2",
   data: {
    items: [
        {name: "el1 render"},
        {name: "el2 render"},
        {name: "el2 render"}
    ]
   } 
})

//v-model
Vue.component('v-model-render', {
    props: ['value'],
    render: function (createElement) {
        var self = this
        return createElement('input', {
            domProps: {
                value: self.value
            },
            on: {
                input: function (event) {
                    self.$emit('input', event.target.value)
                    console.log( event.target.value)
                }
            }
        })
    }
})

new Vue({
    el: "#app3",
    data: {
        value: "kek"
    },
    watch: {
      value: function () {
        console.log(this.value)
      }
    } 
})