new Vue({
    el:"#app",
    data: function() {
        var defaultSides = 10;
        var stats = Array.apply(null, {length: defaultSides}).map(
            function() {
                return 100;
            }
        ); //create array with length of default states and values of 100
        console.log(stats);
        return {
            stats: stats,
            points: generatePoints(stats), 
            sides: defaultSides,
            minRadius: 50,
            interval: null,
            updateInterval: 500
        }; //return the data of the app
    },

    watch: {
        sides: function(newSides, oldSides) {
            var sidesDifference = newSides - oldSides;
            if (sidesDifference > 0) { //if there are more sides 
                for (var i = 1; i <= sidesDifference; i++) { 
                    this.stats.push(this.newRandomValue()); //add new states
                }
            } else {
                var absoluteSidesDifference = Math.abs(sidesDifference);
                for (var i = 1; i <= absoluteSidesDifference; i++) {
                    this.stats.shift();
                }
            }
        },
        stats: function(newStats) {
            TweenLite.to(this.$data, this.updateInterval / 1000, 
            { points: generatePoints(newStats)});
        },
        updateInterval: function() {
            this.resetInterval();
        }
    },
    mounted: function() {
        this.resetInterval();
    },
    methods: {
        randomizeStats: function() {
            var vm = this;
            this.stats = this.stats.map(function() {
              return vm.newRandomValue();
            });
        },
        newRandomValue() {
            //ceil - round up
            console.log("RANDOM VALUE");
            console.log(Math.ceil(
                this.minRadius + Math.random() * (100 - this.minRadius)
            ));
            return Math.ceil(
                this.minRadius + Math.random() * (100 - this.minRadius)
            );
        },
        resetInterval() {
            var vm = this;
            //cancel regular performance of  
            clearInterval(this.interval);
            console.log("AFTER CLEAR");
            this.randomizeStats();
            console.log("AFTER RANDOMIZE");
            //set regular performance of function with updateInterval
            this.interval = setInterval(function() {
                vm.randomizeStats();
            }, this.updateInterval);
        }
    }
});

function valueToPoint(value, index, total) {
    var x = 0;
    var y = -value *0.9;
    var angle = (Math.PI * 2) * index / total;
    var cos = Math.cos(angle);
    var sin = Math.sin(angle);

    var tx = x * cos - y * sin + 100
    var ty = x * sin + y * cos + 100;

    return {x: tx, y: ty};
}

function generatePoints(stats) {
    var total = stats.length;
    return stats.map(function (stat, index) {
        var point = valueToPoint(stat, index, total);
        console.log("POINT");
        console.log(point.x + "," + point.y);
        return point.x + "," + point.y
    })
    .join(" ")
}