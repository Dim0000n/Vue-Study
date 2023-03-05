Vue.component('anchored-heading', {
    render: function (createElement) {
        return createElement(
            'h' + this.level, //tag name
            this.$slots.default //value of slot
        )
    },
    props: {
        level: {
            type: Number,
            required: true
        }
    }
})

new Vue({
    el: "#app1",
    data: {}
})

//complete example
var getChildrenTextContet = function(children) {
    return children.map( function (node) {
        return node.children //if there is children in node
        ? getChildrenTextContet(node.children) //do recursion
        : node.text //else return text
    })
}

Vue.component('anchored-heading-complete', {
    render: function (createElement) {
        //create kebab-case id 
        var headingId = getChildrenTextContet(this.$slots.default)[0] //get text from slot
        .toLowerCase()  //transform to lower case
        .replace(/\W+/g, '-')   //clear
        .replace(/(^-|-$)/g, '')
        return createElement(
            'h' + this.level,   //create tag
            [
                createElement('a', {    //create link
                    attrs: {
                        name: headingId,
                        href: "#" + headingId
                    }
                }, this.$slots.default)
            ]
        )
    },
    props: {
        level: {
            type: Number,
            required: true       
        }
    }
})

new Vue({
    el: "#app2",
    data: {}
})

