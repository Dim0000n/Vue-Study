//text
new Vue({
    el: "#app-1",
    data: {
        message: "",
        ml_message: ""
    }
})

//checkboxes
new Vue({
    el: "#app-2",
    data: {
        checked: false,
        checkedNames: []
    }
})

//radiobuttons
new Vue({
    el: "#app-3",
    data: {
        picked: ""
    }
})

//selectors
new Vue({
    el: "#app-4",
    data: {
        selected: "",
        mult_selected: [],
        dyn_selected: 'A',
        options: [
            {text: "One", value: "A"},
            {text: "Two", value: "B"},
            {text: "Three", value: "C"}
        ]
    }
})