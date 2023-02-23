//global directive
Vue.directive('focus-global', {
    inserted: function(el) {
        console.log("focus global")
        el.focus()
    }
})

new Vue({
    el: "#app1",
    data: {}
})

//local directive
new Vue({
    el:'#app2',
    data: {},
    directives: {
        focus_local: {      //focus-local are forbidden
            inserted: function(el) {
                el.focus()
            }
        }
    }
})


//hook arguments
Vue.directive('demo', {
    bind: function(el, binding, vnode) {
        var s = JSON.stringify

        el.innerHTML =
        'name: '       + s(binding.name) + '<br>' +
        'value: '      + s(binding.value) + '<br>' +
        'expression: ' + s(binding.expression) + '<br>' +
        'argument: '   + s(binding.arg) + '<br>' +
        'modifiers: '  + s(binding.modifiers) + '<br>' +
        'vnode keys: ' + Object.keys(vnode).join(', ')
    }
})

new Vue({
    el: "#app3",
    data: {
        message: 'hello!'
    }
})

//Dynamic argument
Vue.directive('pin', {
    bind: function(el, binding, vnode) {
        el.style.position = 'fixed'
        var s = binding.arg //get the direction 
        el.style[s] = binding.value + "px"
    }
})

new Vue({
    el: "#app4",
    data: function() {
        return {
            direction: 'bottom'
        }
    }
})