new Vue({
    el: "#app1",
    data: {message: "nothing"},
    filters: {
        capitalizeLocal: function(value) {
            if (!value) return ''
            value = value.toString()
            //increase first character + copy array value starts with 1 index
            return value.charAt(0).toUpperCase() + value.slice(1) 
        },

        formatIdLocal: function(value) {
            if (!value) return ''
            return value.toString() + '_localFilter'
        }
    }
})

Vue.filter('capitalizeGlobal', function(value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1) 
})

Vue.filter('formatIdGlobal', function(value) {
    if (!value) return ''
    return value.toString() + "_global"
})

new Vue({
    el: "#app2",
    data: {
        message: "global"
    }
})