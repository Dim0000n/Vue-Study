//create the Mixin
var myMixin = {
    created: function() {
        this.hello()
    },
    methods: {
        hello() {
            console.log("Hello from mixin")
        }
    }
}

//Create the Component with the Mixin
var Component = Vue.extend({
    mixins: [myMixin]
})

var component = new Component()

//Fusion of options
var mixin = {
    data: function () {
        return {
            message: 'hello',
            foo: 'abc'
        }
    }
}

new Vue({
    mixins: [mixin],
    data: function() {
        return {
            message: 'goodbye',
            bar: 'def'
        }
    },
    created: function() {
        console.log(this.$data)
    }
})

//hooks
var mixinHooks = {
    created: function() {
        console.log("hook from mixin")
    }
}

new Vue({
    mixins: [mixinHooks],
    created: function() {
        console.log("hook from component")
    }
})

//other options
var mixinOptions = {
    methods: {
        foo() {
            console.log('foo')
        },
        conflicting() {
            console.log('form mixin')
        }
    }
}

var vm = new Vue({
    mixins: [mixinOptions],
    methods: {
        bar() {
            console.log('bar')
        },
        conflicting() {
            console.log("from component")
        } 
    }
})

vm.foo()
vm.bar()
vm.conflicting()

//global mixins
Vue.mixin({
    created: function() {
        var myOption = this.$options.myOption //try to get option from component
        if(myOption) {  //if there is one
            console.log(myOption) //log
        }
    }
})

new Vue({
    myOption: 'myOption'
})