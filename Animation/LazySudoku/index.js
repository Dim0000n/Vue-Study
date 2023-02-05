console.log(Array.apply(null, {length: 81}).map(function(_, index) {
    return {
        id: index,
        number: (index % 9) + 1
    };
})) //creation array with length equals 81. 
//Every element is an object with its id and number from 1 to 9 
new Vue({
    el: "#sudoku-demo",
    data: {
        cells: Array.apply(null, {length: 81}).map(function(_, index) {
            return {
                id: index,
                number: (index % 9) + 1
            };
        })
    },
    methods: {
        shuffle: function() {
            this.cells = _.shuffle(this.cells)
        }
    }
})